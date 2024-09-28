const { Schema, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },
    icon: {
      type: String,
      require: [true, "Icon is required"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Category = model("Category", CategorySchema);

module.exports = Category;
