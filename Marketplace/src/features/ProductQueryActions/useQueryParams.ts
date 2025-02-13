import { SyntheticEvent, useMemo, } from "react";
import { useSearchParams } from "react-router-dom";
import { QueryParams } from "../../shared/redux/query/endpoints/productsApi";
import useEvent from "react-use-event-hook";
import { variants } from "./sortVariants";
type SortParam = Required<Pick<QueryParams,"sort">>["sort"]
type SortMethod = Required<Pick<QueryParams,"sortMethod">>["sortMethod"]
const useQueryParams = (initialLimit: string) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    const limit = searchParams.get("limit") || initialLimit;
    const search = searchParams.get("search") || "";
    const sort = searchParams.get("sort") as SortParam || "price";
    const sortMethod = searchParams.get("sortMethod") as SortMethod || "1";
    const category = searchParams.get("category") || "" ;
    const minPrice = searchParams.get("from") || "";
    const maxPrice = searchParams.get("to") || "";

    const onChangePage = useEvent((value: string) => {
        setSearchParams(prev=>{
            prev.set("page",value)
            return prev
        });
    })
    const onShowMore = useEvent(() => {
        setSearchParams(prev=>{
            prev.set("page", (page+1).toString())
            return prev
        });
    })

    const onSearch = useEvent((e: SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as EventTarget & {
			search: { value: string };
		  };
        if (target.search.value) {
            setSearchParams(prev=>{
                prev.set("search", target.search.value)
                prev.set("page", "1")
                return prev
            });
        } else {
            searchParams.delete("search");
            setSearchParams(prev=>{
                prev.set("page", "1")
                return prev
            });
        }
    })
    const onFilterByCategory = useEvent((value: string) => {
        setSearchParams(prev=>{
            prev.set("category", value)
            prev.set("page", "1")
            return prev
        });
    })
    const onResetCategory = useEvent(() => {
        searchParams.delete("category");
        setSearchParams(prev=>{
            prev.set("page", "1")
            return prev
        });
    })
    const onFilterByPrice = useEvent((from?:number, to?:number) => {
        if (!from && !to) {
            searchParams.delete("from");
            searchParams.delete("to");
        } else if (!from && to) {
            searchParams.delete("from");
            setSearchParams(prev=>{
                prev.set("to", to.toString())
                prev.set("page", "1")
                return prev
            });
        } else if (!to && from) {
            searchParams.delete("to");
            setSearchParams(prev=>{
                prev.set("from", from.toString())
                prev.set("page", "1")
                return prev
            });
        } else if(from && to) {
            setSearchParams(prev=>{
                prev.set("from", from.toString())
                prev.set("to", to.toString())
                prev.set("page", "1")
                return prev
            });
        }
    })
    const onSort = useEvent((value) => {
        const variant = variants.find((item)=>item.value === value)
        if(variant)
            setSearchParams(prev=>{
                prev.set("sort", variant?.sortBy)
                prev.set("sortMethod", variant?.sortMethod)
                prev.set("page", "1")
                return prev
            });
    })

    const queryParams = useMemo(()=>({
        params: {
            page,
            limit,
            search,
            sort,
            sortMethod,
            category,
            minPrice,
            maxPrice,
        },
        actions: {
            onChangePage,
            onShowMore,
            onSearch,
            onFilterByCategory,
            onFilterByPrice,
            onSort,
            onResetCategory,
        }
    }), [
        page,
        limit,
        search,
        sort,
        sortMethod,
        category,
        minPrice,
        maxPrice,

        onChangePage,
        onShowMore,
        onSearch,
        onFilterByCategory,
        onFilterByPrice,
        onSort,
        onResetCategory,
        
    ])

    return queryParams
}

export default useQueryParams;
