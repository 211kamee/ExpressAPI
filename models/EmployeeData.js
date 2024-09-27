import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      default: Date.now,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  }
//   {
//     timestamps: true,
//   }
);

export default mongoose.model("Employees", employeeSchema);