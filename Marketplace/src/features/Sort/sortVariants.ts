interface Variants {
	value: string
	sortBy: "price" | "title" | "discount"
	sortMethod: "-1" | "1"
}

export const variants: Variants[] = [
    {
        value: "Minimal price",
        sortBy: "price",
        sortMethod: "1",
    },
    {
        value: "Maximal price",
        sortBy: "price",
        sortMethod: "-1",
    },
    {
        value: "By title, ⭡",
        sortBy: "title",
        sortMethod: "1",
    },
    {
        value: "By title, ⭣",
        sortBy: "title",
        sortMethod: "-1",
    },
    {
        value: "By discount, ⭡",
        sortBy: "discount",
        sortMethod: "1",
    },
    {
        value: "By discount, ⭣",
        sortBy: "discount",
        sortMethod: "-1",
    },
];
