const { User } = require("../../models");

class UserController {
  get(req, res) {
    const {
      user: { email, name },
    } = req;
    res.send({ email, name });
  }

  async delete() {
    const { data } = req.body;

    try {
      await User.deleteOne({
        email: data.email,
      });
      res.send({
        status: true,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error!");
    }
  }
}

module.exports = new UserController();
