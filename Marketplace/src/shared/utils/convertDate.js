export function convertDate(date) {
	const orderDate = new Date(date);
	const options = { day: "numeric", year: "numeric", month: "long" };
	const createdAt = orderDate.toLocaleDateString("en-US", options);
	return createdAt;
}
