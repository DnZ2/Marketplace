import { cva } from "class-variance-authority";
const ButtonVariants = cva("button", {
	variants: {
		variant: {
			primary: "text-[#F5F5F5] bg-[#DB4444]",
			secondary: "bg-[#F5F5F5] border-[#00000050]",
			icon: "rounded-md bg-inherit",
			circle: "rounded-full bg-white size-8",
		},
		size: {
			base: "rounded-md py-4 px-10",
			secondary: "rounded-md border border-solid py-4 px-10",
			none: "",
		},
	},

	defaultVariants: {
		variant: "primary",
		size: "base",
	},
});
export default ButtonVariants;
