const router = require("express").Router();

const userRoutes = require("./user");
const contact = require("./contact");

router.use("/user", userRoutes);
router.use("/contact", contact);

module.exports = router;
