const { Schema, model } = require("mongoose");

const IncomeSchema = new Schema(
  {
    companyName: {
      type: String,
      require: [true, "Title is required"],
    },
    title: {
      type: String,
      require: [true, "Title is required"],
    },
    amount: {
      type: Number,
      require: [true, "Amount is required"],
    },
    incomeDate: {
      type: Date,
      require: [true, "Income Date is required"],
    },
    type: {
      type: String,
      require: [true, "Type is required"],
      default: "income",
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

const Income = model("Income", IncomeSchema);

module.exports = Income;
