import { cva } from "class-variance-authority";
export const ButtonVariants = cva("button", {
    variants: {
        variant: {
            empty: "bg-transparent",
            primary: "text-[#F5F5F5] bg-[#DB4444]",
            secondary: "bg-[#F5F5F5] border-[#00000050]",
            icon: "rounded-md bg-inherit",
            circle: "rounded-full bg-white size-8",
        },
        size: {
            empty: "border-none",
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
