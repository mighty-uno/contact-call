"user strict";
const { Contacts } = require("../../models");
const { validateMobileNumber } = require("../../services/birdApi");

class Contact {
  async getAll(req, res) {
    try {
      const result = await Contacts.find({ user: req.user._id })
        .sort({ createdAt: -1 })
        .lean();
      res.send(result);
    } catch (e) {
      res.send({ error: e.message });
    }
  }

  async add(req, res) {
    try {
      req.body.user = req.user._id;
      const preResult = await Contacts.findOne({
        user: req.user._id,
        mobile: req.body.mobile,
      });
      if (preResult) {
        res.send({ error: "Already Exists" });
        return;
      }

      const contact = new Contacts(req.body);
      await contact.save();
      res.send(contact.toJSON());
    } catch (e) {
      res.send({ error: e.message });
    }
  }

  async update(req, res) {
    try {
      const contact = await res.send(contact.toJSON());
    } catch (e) {
      res.send({ error: e.message });
    }
  }

  async validate(req, res) {
    try {
      const result = await validateMobileNumber(req.params.mobile);
      res.send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  }
}

module.exports = new Contact();
