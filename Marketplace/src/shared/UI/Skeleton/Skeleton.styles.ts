import { cva } from "class-variance-authority";
export const SkeltonVariants = cva("animate-pulse bg-gray-300", {
    variants: {
        size: {
            p: "rounded-md py-4 px-10",
            h1: "rounded-md py-4 px-10",
            span: "rounded-md py-4 px-10",
            input: "rounded-md py-4 px-10",
            button: "rounded-md py-4 px-10",
            circle: "rounded-md py-4 px-10",
            square: "rounded-md py-4 px-10",
        },
    },
});
export default SkeltonVariants;
