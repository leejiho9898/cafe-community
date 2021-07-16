import User from "../models/user";

export const register = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const exist = await User.findOne({
      email,
    });
    if (exist) {
      return res.status(500).json({
        success: false,
        message: "이미 존재하는 계정입니다.",
      });
    }
    const user = new User({
      email,
      password,
      name,
    });
    console.log(user);
    await user.setPassword(password);

    await user.save();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      e,
    });
  }
};
