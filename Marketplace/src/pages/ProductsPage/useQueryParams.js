import { useSearchParams } from "react-router-dom";
import { useCallback, useState } from "react";
const useQueryParams = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		page: 1,
		limit: 8,
	});
	const limitParam = searchParams.get("limit") || 10;
	const searchParam = searchParams.get("search") || "";
	const sortParam = searchParams.get("sort") || "price";
	const sortMethod = searchParams.get("sortMethod") || "1";
	const categoryParam = searchParams.get("category") || "";
	const minPrice = searchParams.get("from") || "";
	const maxPrice = searchParams.get("to") || "";
	const [sortQuery, setSortQuery] = useState("");

	const handleSearchQuery = (e) => {
		e.preventDefault();
		if (e.target.search.value) {
			setSearchParams({
				...Object.fromEntries(searchParams),
				page: 1,
				search: e.target.search.value,
			});
		} else {
			searchParams.delete("search");
			setSearchParams({ ...Object.fromEntries(searchParams), page: 1 });
		}
	};
	const handleSort = useCallback(
		(e) => {
			if (sortQuery === e.currentTarget.id) {
				setSearchParams({
					...Object.fromEntries(searchParams),
					page: 1,
					sortMethod: sortMethod * -1,
				});
			} else {
				setSearchParams({
					...Object.fromEntries(searchParams),
					page: 1,
					sort: e.currentTarget.id,
					sortMethod: 1,
				});
				setSortQuery(e.currentTarget.id);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[sortMethod, sortQuery]
	);
	const handleFilterByCategory = (value, defaultValue) => {
		if (value === defaultValue) {
			searchParams.delete("category");
			setSearchParams({ ...Object.fromEntries(searchParams), page: 1 });
		} else {
			setSearchParams({
				...Object.fromEntries(searchParams),
				page: 1,
				category: value,
			});
		}
	};
	const handleFilterByPrice = (from, to) => {
		if (!from && !to) {
			searchParams.delete("from");
			searchParams.delete("to");
			setSearchParams({ ...Object.fromEntries(searchParams), page: 1 });
		} else if (!from) {
			searchParams.delete("from");
			setSearchParams({
				...Object.fromEntries(searchParams),
				page: 1,
				to: to,
			});
		} else if (!to) {
			searchParams.delete("to");
			setSearchParams({
				...Object.fromEntries(searchParams),
				page: 1,
				from: from,
			});
		} else {
			setSearchParams({
				...Object.fromEntries(searchParams),
				page: 1,
				from: from,
				to: to,
			});
		}
	};
	const handleSortSelect = (sortBy, sortMethod) => {
		setSearchParams({
			...Object.fromEntries(searchParams),
			page: 1,
			sort: sortBy,
			sortMethod,
		});
	};

	return {
		limitParam,
		searchParam,
		sortParam,
		sortMethod,
		categoryParam,
		minPrice,
		maxPrice,
		sortQuery,
		handleSearchQuery,
		handleSort,
		handleFilterByCategory,
		handleFilterByPrice,
		handleSortSelect,
	};
};

export default useQueryParams;
