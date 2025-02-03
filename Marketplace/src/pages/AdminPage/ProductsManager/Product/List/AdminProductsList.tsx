import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AdminProductCard from "../Card/AdminProductCard"
import { CSSProperties, memo, useEffect, useRef, useState } from "react"
import { Product, QueryParams, useLazyGetProductsQuery } from "shared/redux/query/endpoints";

interface Props {
    params: Required<QueryParams>
}

const AdminProductsList = (props: Props) => {
    const {params} = props
    const [trigger, { isFetching }] = useLazyGetProductsQuery();

    const [page, setPage] = useState(1)
    const [products, setProducts] = useState<Product[]>([]);
    const [hasNextPage, setHasNextPage] = useState(true);
    
    const infiniteLoaderRef = useRef<InfiniteLoader>(null);
    const hasMountedRef = useRef(false);

    const itemCount = hasNextPage ? products.length + 1 : products.length;
    const isItemLoaded = (index: number) => { 
        return index < products.length
    };
    const loadMoreItems = async () => {
        if (isFetching || !hasNextPage) return;
        const { data } = await trigger({ ...params, page }, true);
        if (data) {
            setProducts((prev) => [...prev, ...data.products]);
            setHasNextPage(data.pages > page);
            setPage(prev=>prev+1)
        }
    }
    
    useEffect(() => {
        if(hasMountedRef.current&&infiniteLoaderRef.current) {
            infiniteLoaderRef.current.resetloadMoreItemsCache();
            setPage(1)
            setHasNextPage(true)
            trigger({ ...params, page: 1 }, true).then(({ data }) => {
                if(data && !data.products.length) setHasNextPage(false)
                setProducts([])
            });
        }
        hasMountedRef.current = true;
    }, [params.category, params.maxPrice, params.minPrice, params.search, params.sort, params.sortMethod]);
    
    return (
        <div className="flex flex-col border-2 rounded-md  divide-y-2">
            <div className='[&>span]:p-2 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x-2'>
                <span>Product</span>
                <span>Price, $</span>
                <span>Discount, %</span>
                <span>Quantity</span>
                <span></span>
            </div>
            <InfiniteLoader
                ref={infiniteLoaderRef}
                isItemLoaded={isItemLoaded}
                itemCount={itemCount}
                loadMoreItems={loadMoreItems}
                threshold={2}
            >
                {({ onItemsRendered, ref }) => (
                    <List
                        height={600}
                        width={1115}
                        itemCount={itemCount}
                        itemSize={90}
                        onItemsRendered={onItemsRendered}
                        className="scrollbar scrollbar-thumb-[#db4444] scrollbar-track-transparent scrollbar-thumb-rounded-lg"
                        ref={ref}
                    >
                        {({ index, style }: {index: number, style: CSSProperties}) => {
                            if (!isItemLoaded(index)) return <div>Loading... {index}</div>;
                            return <AdminProductCard key={products[index].id} style={style} data={products[index]} />;
                        }}
                    </List>
                )}
            </InfiniteLoader>
        </div>
    )
}

export default memo(AdminProductsList)
