import * as yup from "yup";

const userInfoSchema = yup
	.object({
		username: yup
			.string()
			.required("Username is required")
			.min(3, "Username must be at least 3 characters long"),
		email: yup
			.string()
			.email("Invalid email format")
			.required("Email is required"),
		address: yup.string(),
		password: yup
			.string()
			.required("Password is required")
			.matches(/(?=.*[0-9])/, "Password must contain a number")
			.matches(/(?=.*[a-z])/, "Password must contain a lowercase letter")
			.matches(/(?=.*[A-Z])/, "Password must contain an uppercase letter")
			.min(8, "Password must be at least 8 characters long"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), null], "Passwords must match")
			.required("Confirm Password is required"),
	})
	.required();
export default userInfoSchema;
