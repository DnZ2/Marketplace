import { cva } from "class-variance-authority";
export const ButtonVariants = cva("button", {
    variants: {
        variant: {
            empty: "bg-transparent",
            primary: "text-[#F5F5F5] bg-[#DB4444]",
            secondary: "bg-[#F5F5F5] border-[#00000050] border",
            skeleton: "bg-gray-300 animate-pulse",
        },
        size: {
            empty: "border-none w-fit",
            base: "rounded-md h-12 px-12 text-base",
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
