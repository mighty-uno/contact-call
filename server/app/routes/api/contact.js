const router = require("express").Router();
const Controller = require("../../controllers/api/contact");

router.route("/").get(Controller.getAll).post(Controller.add);
router.route("/:id").patch(Controller.update);
router.get("/validate/:mobile", Controller.validate);

module.exports = router;
