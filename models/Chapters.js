// schemas Mongoose
const mongoose = require("mongoose");

const ValideSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, min: 3 },
    content: { type: String, required: true },
    number: {
      type: Number,
      required: true,
      validate: {
        validator: (v) => v > 0,
        message: "The number must be start with 1.",
      },
      unique: true,
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Valide", ValideSchema);
