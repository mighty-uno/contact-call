const { body } = require("express-validator");
const router = require("express").Router();

const expressValidateError = require("../../helpers/expressValidateError");
const UserController = require("../../controllers/api/user");

router.get("/", UserController.get);

router.delete(
  "/",
  expressValidateError([
    body("email")
      .isEmail()
      .withMessage("Invalid Email")
      .bail()
      .normalizeEmail(),
  ]),
  UserController.delete
);

module.exports = router;
