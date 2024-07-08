export function convertDate(object) {
	const date = new Date(object.createdAt);
	const options = { day: "numeric", year: "numeric", month: "long" };
	const createdAt = date.toLocaleDateString("en-US", options);
	return createdAt;
}
