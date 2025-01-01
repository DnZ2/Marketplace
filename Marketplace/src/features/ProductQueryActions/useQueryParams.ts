import { SyntheticEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { QueryParams } from "../../shared/redux/query/endpoints/productsApi";
import useEvent from "react-use-event-hook";
type SortParam = Required<Pick<QueryParams,"sortParam">>["sortParam"]
type SortMethod = Required<Pick<QueryParams,"sortMethod">>["sortMethod"]
const useQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        page: "1",
        limit: "8",
    });
    const pageParam = Number(searchParams.get("page")) || 1;
    const limitParam = searchParams.get("limit") || "8";
    const searchParam = searchParams.get("search") || "";
    const sortParam = searchParams.get("sort") as SortParam || "price";
    const sortMethod = searchParams.get("sortMethod") as SortMethod || "1";
    const categoryParam = searchParams.get("category") || "";
    const minPrice = searchParams.get("from") || "";
    const maxPrice = searchParams.get("to") || "";

    const handleChangeQueryPage = useEvent((page: number) => {
        window.scrollTo(0, 0);
        setSearchParams({
            ...Object.fromEntries(searchParams),
            page: page.toString(),
        });
    })
    const handleSearchQuery = useEvent((e: SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as EventTarget & {
			search: { value: string };
		  };
        if (target.search.value) {
            setSearchParams({
                ...Object.fromEntries(searchParams),
                search: target.search.value,
                page: "1",
            });
        } else {
            searchParams.delete("search");
            setSearchParams({
                ...Object.fromEntries(searchParams),
                page: "1"
            });
        }
    })
    const handleFilterByCategory = useEvent((value: string) => {
        setSearchParams({
            ...Object.fromEntries(searchParams),
            category: value,
            page: "1",
        });
    })
    const handleResetCategoryParam = useEvent(() => {
        searchParams.delete("category");
        setSearchParams({
            ...Object.fromEntries(searchParams),
            page: "1"
        });
    })
    const handleFilterByPrice = useEvent((from?:number, to?:number) => {
        if (!from && !to) {
            searchParams.delete("from");
            searchParams.delete("to");
            setSearchParams({ ...Object.fromEntries(searchParams) });
        } else if (!from && to) {
            searchParams.delete("from");
            setSearchParams({
                ...Object.fromEntries(searchParams),
                to: to.toString(),
                page: "1"
            });
        } else if (!to && from) {
            searchParams.delete("to");
            setSearchParams({
                ...Object.fromEntries(searchParams),
                from: from.toString(),
                page: "1"
            });
        } else if(from && to) {
            setSearchParams({
                ...Object.fromEntries(searchParams),
                from: from.toString(),
                to: to.toString(),
                page: "1"
            });
        }
    })
    const handleSortSelect = useEvent((sortBy: "price"|"discount"|"title", sortMethod: "1"|"-1") => {
        setSearchParams({
            ...Object.fromEntries(searchParams),
            sort: sortBy,
            sortMethod,
            page: "1",
        });
    })

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
