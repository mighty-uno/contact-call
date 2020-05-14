"user strict";
const { Contacts } = require("../../models");

class Contact {
  async getAll(req, res) {
    try {
      const result = await Contacts.find({ user: req.user._id })
        .sort({ createdAt: -1 })
        .lean();
      res.send(result);
    } catch (e) {
      res.send(e);
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
      res.send(e);
    }
  }

  async update(req, res) {
    try {
      const contact = await res.send(contact.toJSON());
    } catch (e) {
      res.send(e);
    }
  }
}

module.exports = new Contact();
