import { cva, VariantProps } from "class-variance-authority";
export const InputVariants = cva("input", {
    variants: {
        variant: {
            primary: "bg-[#F5F5F5] outline-1 focus:outline",
            skeleton: "bg-slate-200 animate-pulse"
        },
        size: {
            default: "px-4 py-3 rounded-md",
        },
        invalid: {
            true: "outline-red-400",
            false: "outline-green-400",
            null: null
        },
        disabled: {
            true: "text-[#a2a2a2] cursor-not-allowed",
            false: null
        },
        touched: {
            true: "outline",
            false: null,
            null: null
        }
    },

    defaultVariants: {
        variant: "primary",
        size: "default",
    },
});
export interface SpecialProps extends Omit<VariantProps<typeof InputVariants>, "disabled">{}
