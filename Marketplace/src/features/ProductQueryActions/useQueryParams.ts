import { SyntheticEvent, } from "react";
import { useSearchParams } from "react-router-dom";
import { QueryParams } from "../../shared/redux/query/endpoints/productsApi";
import useEvent from "react-use-event-hook";
type SortParam = Required<Pick<QueryParams,"sortParam">>["sortParam"]
type SortMethod = Required<Pick<QueryParams,"sortMethod">>["sortMethod"]
const useQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        page: "1",
        limit: "4",
    });
    const pageParam = Number(searchParams.get("page")) || 1;
    const limitParam = searchParams.get("limit") || "4";
    const searchParam = searchParams.get("search") || "";
    const sortParam = searchParams.get("sort") as SortParam || "price";
    const sortMethod = searchParams.get("sortMethod") as SortMethod || "1";
    const categoryParam = searchParams.get("category") || "" ;
    const minPrice = searchParams.get("from") || "";
    const maxPrice = searchParams.get("to") || "";

    const handleChangeQueryPage = useEvent((page: number) => {
        window.scrollTo(0, 0);
        setSearchParams(prev=>({
            ...Object.fromEntries(prev),
            page: page.toString(),
        }));
    })

    const handleSearchQuery = useEvent((e: SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as EventTarget & {
			search: { value: string };
		  };
        if (target.search.value) {
            setSearchParams(prev=>({
                ...Object.fromEntries(prev),
                search: target.search.value,
                page: "1",
            }));
        } else {
            searchParams.delete("search");
            setSearchParams(prev=>({
                ...Object.fromEntries(prev),
                page: "1"
            }));
        }
    })
    const handleFilterByCategory = (value: string) => {
        setSearchParams(prev=>({
            ...Object.fromEntries(prev),
            category: value,
            page: "1",
        }));
    }
    const handleResetCategoryParam = () => {
        searchParams.delete("category");
        setSearchParams(prev=>({
            ...Object.fromEntries(prev),
            page: "1"
        }));
    }
    const handleFilterByPrice = (from?:number, to?:number) => {
        if (!from && !to) {
            searchParams.delete("from");
            searchParams.delete("to");
            setSearchParams(prev=>({ ...Object.fromEntries(prev) }));
        } else if (!from && to) {
            searchParams.delete("from");
            setSearchParams(prev=>({
                ...Object.fromEntries(prev),
                to: to.toString(),
                page: "1"
            }));
        } else if (!to && from) {
            searchParams.delete("to");
            setSearchParams(prev=>({
                ...Object.fromEntries(prev),
                from: from.toString(),
                page: "1"
            }));
        } else if(from && to) {
            setSearchParams(prev=>({
                ...Object.fromEntries(prev),
                from: from.toString(),
                to: to.toString(),
                page: "1"
            }));
        }
    }
    const handleSortSelect =(sortBy: "price"|"discount"|"title", sortMethod: "1"|"-1") => {
        setSearchParams(prev=>({
            ...Object.fromEntries(prev),
            sort: sortBy,
            sortMethod,
            page: "1",
        }));
    }
    
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
