import * as yup from "yup";
const passwordSchema =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{8,}$/;

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .positive("Age must be a positive value")
    .integer("Age must be an integer")
    .min(18, "You must be at least 18 years old")
    .max(120, "Invalid age")
    .required("Age is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(passwordSchema, {
      message:
        "Password must contain at least: 8 characters, 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character",
    })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});
