const mongoose = require("mongoose");
const { Schema } = mongoose;

const Contacts = new Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "A contact must have name"],
    },
    mobile: {
      type: String,

      required: [true, "A contact must have mobile number"],
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "users",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contacts", Contacts);
