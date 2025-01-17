const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controllers");

router.post("/", [
  body("email").isEmail().withMessage("Invalid email!"),
  body("fullName.firstName").isLength({ min: 3 }).withMessage("first name must be 3 characters long!"),
  body("password").isLength({ min: 3 }).withMessage("password must be atleast 3 characters long!"),
],
    userController.registerUser
);

module.exports = router;
