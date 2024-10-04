import { useSearchParams } from "react-router-dom";
const useQueryParams = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		page: 1,
		limit: 8,
	});
	const pageParam = searchParams.get("page") || 1;
	const limitParam = searchParams.get("limit") || 8;
	const searchParam = searchParams.get("search") || "";
	const sortParam = searchParams.get("sort") || "price";
	const sortMethod = searchParams.get("sortMethod") || "1";
	const categoryParam = searchParams.get("category") || "";
	const minPrice = searchParams.get("from") || "";
	const maxPrice = searchParams.get("to") || "";

	const handleChangeQueryPage = (number) => {
		setSearchParams({
			...Object.fromEntries(searchParams),
			page: number,
		});
	};
	const handleSearchQuery = (e) => {
		e.preventDefault();
		if (e.target.search.value) {
			setSearchParams({
				...Object.fromEntries(searchParams),
				search: e.target.search.value,
			});
		} else {
			searchParams.delete("search");
			setSearchParams({ ...Object.fromEntries(searchParams) });
		}
	};

	const handleFilterByCategory = (value) => {
		setSearchParams({
			...Object.fromEntries(searchParams),
			category: value,
		});
	};
	const handleResetCategoryParam = () => {
		searchParams.delete("category");
		setSearchParams({ ...Object.fromEntries(searchParams) });
	};
	const handleFilterByPrice = (from, to) => {
		if (!from && !to) {
			searchParams.delete("from");
			searchParams.delete("to");
			setSearchParams({ ...Object.fromEntries(searchParams) });
		} else if (!from) {
			searchParams.delete("from");
			setSearchParams({
				...Object.fromEntries(searchParams),
				to: to,
			});
		} else if (!to) {
			searchParams.delete("to");
			setSearchParams({
				...Object.fromEntries(searchParams),
				from: from,
			});
		} else {
			setSearchParams({
				...Object.fromEntries(searchParams),
				from: from,
				to: to,
			});
		}
	};
	const handleSortSelect = (sortBy, sortMethod) => {
		setSearchParams({
			...Object.fromEntries(searchParams),
			sort: sortBy,
			sortMethod: sortMethod,
		});
	};

	return {
		pageParam,
		limitParam,
		searchParam,
		sortParam,
		sortMethod,
		categoryParam,
		minPrice,
		maxPrice,
		handleChangeQueryPage,
		handleSearchQuery,
		handleFilterByCategory,
		handleFilterByPrice,
		handleSortSelect,
		handleResetCategoryParam,
	};
};

export default useQueryParams;
