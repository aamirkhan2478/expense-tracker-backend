const { Schema, model } = require("mongoose");

const ExpenseSchema = new Schema(
  {
    title: {
      type: String,
      require: [true, "Title is required"],
    },
    amount: {
      type: Number,
      require: [true, "Amount is required"],
    },
    expenseDate: {
      type: Date,
      require: [true, "Expense Date is required"],
    },
    type: {
      type: String,
      require: [true, "Type is required"],
      default: "expense",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
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

const Expense = model("Expense", ExpenseSchema);

module.exports = Expense;
