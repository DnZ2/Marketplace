import * as yup from "yup";

const userInfoSchema = yup
    .object({
        username: yup
            .string()
            .required("Username is required")
            .min(3, "Username must be at least 3 characters long")
            .max(32, "Username must be no more 32 characters long"),
        email: yup
            .string()
            .email("Invalid email format")
            .required("Email is required"),
        address: yup.string(),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters long")
            .max(32, "Password must be no more 32 characters long")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[\W_]/, "Password must contain at least one special character"),
        confirmPassword: yup.string()
            .required("Confirm Password is required")
            .oneOf([yup.ref("password"), ""], "Passwords must match"),
        currentPassword: yup.string()
            .required("Current Password is required")
    })
    .required();
export default userInfoSchema;
