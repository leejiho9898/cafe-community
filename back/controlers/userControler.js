import User from "../models/user";

export const register = async (req, res) => {
  const { id, password, name } = req.body;

  try {
    const exist = await User.findOne({
      id,
    });
    if (exist) {
      return res.status(500).json({
        success: false,
        message: "이미 존재하는 계정입니다.",
      });
    }
    const user = new User({
      id,
      password,
      name,
    });
    console.log(user);
    await user.setPassword(password);
    await user.save();
    const token = await user.generateToken();
    const data = user.serialize();

    res.cookie("user", token).status(200).json({
      success: true,
      user: data,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      e,
    });
  }
};

//로그인

export const login = async (req, res) => {
  const { id, password } = req.body;

  //email , password 가 만약에 안들어왔으면 정보가 안들어 온거니까 에러처리
  if (!id || !password) {
    return res.status(401).json({
      success: false,
      message: "정보가 입력되지 않았습니다.",
    });
  }
  try {
    //아이디가 존재하는지 확인
    const user = await User.findOne({ id }); //findOne은 찾으면 true 못찾으면 false

    if (!user) {
      res.status(401).json({
        success: false,
        message: "계정이 존재하지 않습니다.",
      });
    }

    const valid = await user.checkPassword(password);

    if (!valid) {
      res.status(401).json({
        success: false,
        message: "잘못된 비밀번호 입니다.",
      });
    }

    const token = await user.generateToken();
    const data = user.serialize();
    res.cookie("user", token).status(200).json({
      success: true,
      user: data,
    });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};


//로그아웃

export const logout = async(req,res)=>{
  res.cookie("user","").status(200).json({
  success:true,
  message:"로그아웃 성공!",
 })
}