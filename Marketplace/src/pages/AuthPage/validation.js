const validation = {
	email: {
		regexp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
		error: "Email validation error",
	},
	password: {
		variants: [
			{
				regexp: /.{8,}/,
				error: "Minimum length 8",
			},
			{
				regexp: /(?=.*[a-z])/,
				error: "At least one lowercase letter",
			},
			{
				regexp: /(?=.*[A-Z])/,
				error: "At least one uppercase letter",
			},
			{
				regexp: /(?=.*\d)/,
				error: "At least one digit",
			},
			{
				regexp: /(?=.*[@$!_%*?&])/,
				error: "At least one special character @$!_%*?&",
			},
		],

		test: function (value) {
			return (
				this.variants.find((variant) => {
					if (!variant.regexp.test(value)) {
						return variant;
					}
				})?.error || null
			);
		},
	},
};
console.log(validation.password.test("1aA3123123@"));
export default validation;
