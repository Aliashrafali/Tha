const express = require("express");
const User = require("../schema/user-schema.js");
const {getUser} = require('../controller/user-controller.js');
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/add-user", upload.single("image"), async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
      image: req.file ? req.file.filename : null,
    });
    res.status(201).json({
      message: "User Added Successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get('/get-user', getUser);
module.exports = router;
