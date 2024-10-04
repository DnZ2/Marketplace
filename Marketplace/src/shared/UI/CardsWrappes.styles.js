import { cva } from "class-variance-authority";
const CardsVariants = cva("CardsVariants", {
	variants: {
		variant: {
			cart: "grid grid-cols-[1fr_1fr_1fr_1fr_80px] items-center",
			default:
				"grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-14 gap-x-7 justify-items-center",
			admin: "grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center",
			mini: "grid grid-cols-[10%_1fr_15%_7%] items-center",
			micro: "grid grid-cols-[10%_2fr_1fr] items-center",
		},
		size: {
			base: "py-6 pl-7",
			sm: "py-3 pr-4",
		},
		styles: {
			shadow: "shadow-[0_0_4px_1px_#dddddd] rounded-md",
		},
	},

	defaultVariants: {
		variant: "default",
	},
});
export default CardsVariants;
