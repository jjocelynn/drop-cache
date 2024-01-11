const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema(
  {
    english: {
      type: String,
      required: true,
    },
    jyutping: {
      type: String,
    },
    character: {
      type: String,
    },
  },
  { timestamps: true }
);

const Word = mongoose.model("Word", wordSchema);

module.exports = Word;
