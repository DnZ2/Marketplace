import { cva } from "class-variance-authority";
const NumberInputWrapperVariants = cva("NumberInputWrapperVariants", {
    variants: {
        variant: {
            default: "relative w-fit",
            secondary: "flex items-center h-full",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export default NumberInputWrapperVariants;