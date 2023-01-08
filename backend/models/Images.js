const { Schema, model } = require("mongoose");

const ImagesSchema = new Schema(
  {
    filename: { type: String },
    ext: { type: String },
    url: { type: String },
    transaction: { type: Schema.Types.ObjectId, ref: "Transaction" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = ImagesModel = model("Images", ImagesSchema);
