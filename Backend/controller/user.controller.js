import User from "../modal/user.modal.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const userone = await User.findOne({ email });

    if (userone) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashpassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashpassword,
    });
    await createdUser.save();
    res.status(201).json({
      massage: "User saved successfull",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("error: " + error.massage);
    res.status(500).json({ massage: "Internal server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid user name password" });
    } else {
      res.status(200).json({
        message: "Successfull login",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("error :" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
