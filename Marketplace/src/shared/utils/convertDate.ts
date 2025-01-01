export function convertDate(date: number) {
    const orderDate = new Date(date);
    const options = { day: "numeric", year: "numeric", month: "long" } as const;
    const createdAt = orderDate.toLocaleDateString("en-US", options);
    return createdAt;
}
