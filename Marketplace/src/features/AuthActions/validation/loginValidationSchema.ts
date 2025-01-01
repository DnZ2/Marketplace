import * as Yup from "yup";
const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long")
        .max(32, "Password must be no more 32 characters long")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[\W_]/, "Password must contain at least one special character"),
});
export default loginValidationSchema