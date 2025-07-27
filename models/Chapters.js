// schemas Mongoose
const mongoose = require("mongoose");

const ChapterSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 3 },
    content: { type: String, required: true },
    number: {
      type: Number,
      required: true,
      validate: {
        validator: (v) => v > 0,
        message: "The number must be start with 1.",
      },
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chapter", ChapterSchema);
