const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    areaCode: {
      type: Number,
      required: true,
      min: [4, "Areacode must be at least 4"],
      max: [5, "Areacode must be more than 5"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("Collections", collectionSchema);
