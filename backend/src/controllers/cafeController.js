import Cafe from "../models/cafe";
import multer from "multer";
import { Request, Response } from "express";
// multer
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
var upload = multer({ storage: storage }).single("cafe_img");

// 카페생성
export const create = async (req, res) => {
  const { name, thumbnail, route, manager } = req.body;

  try {
    // 카페 이름이 이미 존재하는지 확인
    const cafeNameExist = await Cafe.findOne({
      name,
    });
    if (cafeNameExist) {
      return res.status(409).json({
        success: false,
        message: "카페 이름이 이미 존재합니다.",
      });
    }

    //카페 라우터가 이미 존재하는지 확인
    const cafeRouteExist = await Cafe.findOne({
      route,
    });
    if (cafeRouteExist) {
      return res.status(409).json({
        success: false,
        message: "카페 주소가 이미 존재합니다.",
      });
    }

    let cafe = new Cafe(req.body);
    cafe = await cafe.populate("manager").execPopulate(); //save하기 전에

    await cafe.save();

    return res.status(201).json({
      success: true,
      cafe,
    });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};

//전체 카페 리스트 조회

export const readAllCafeList = async (req, res) => {
  //await 안쓰면 find 하는 도중에 밑에 리스폰스가 미리 작동해서 안담김
  try {
    const cafes = await Cafe.find();
    return res.status(200).json({
      success: true,
      cafes,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

// 이미지 업로드
export const uploadImg = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
};

//카페 상세 정보 조회

export const cafeInfo = async (req, res) => {
  const { route, userId } = req.params;
  try {
    let cafeInfo = await Cafe.findOne({ route }).populate("manager", {
      name: true,
      id: true,
    });
    if (!cafeInfo) {
      return res.status(400).json({
        success: false,
        message: "해당 주소(route) 를 가진 카페가 없습니다.",
      });
    }
    const member = cafeInfo.members.some(
      // 현재 접속한 유저가 카페 맴버인지 확인
      (m) => m._id.toString() === userId
    );


    // const cafMmember = await Cafe.findOne({
    //   members.member._id:userId;
    // });

    
    return res.status(200).json({
      success: true,
      cafeInfo,
      member,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};
