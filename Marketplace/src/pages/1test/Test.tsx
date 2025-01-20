import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AdminProductCard from "pages/AdminPage/Product/Card/AdminProductCard"
import { Product, useLazyGetProductsQuery } from "shared/redux/query/endpoints";
import { CSSProperties, useEffect, useRef, useState } from "react";
import useQueryParams from "features/ProductQueryActions/useQueryParams";

export const Test = () => {
    const {params} = useQueryParams("10")
    const [trigger, { isFetching }] = useLazyGetProductsQuery();

    const [page, setPage] = useState(1)
    const [products, setProducts] = useState<Product[]>([]);
    const [hasNextPage, setHasNextPage] = useState(true);

    const infiniteLoaderRef = useRef<InfiniteLoader>(null);
    const hasMountedRef = useRef(false);
  
    const loadMoreItems = async () => {
        if (isFetching || !hasNextPage) return;
        const { data } = await trigger({ ...params, page });
        if (data) {
            setProducts((prev) => [...prev, ...data.products]);
            setHasNextPage(data.pages > page);
            setPage(prev=>prev+1)
        }
    }
  
    const itemCount = hasNextPage ? products.length + 1 : products.length;
    const isItemLoaded = (index: number) => index < products.length;

    useEffect(() => {
        if (infiniteLoaderRef.current && hasMountedRef.current) {
            infiniteLoaderRef.current.resetloadMoreItemsCache();
            setPage(1)
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
                        ref={ref}
                    >
                        {({ index, style }: {index: number, style: CSSProperties}) => {
                            if (!isItemLoaded(index)) return <div>Loading...</div>;
                            return <AdminProductCard style={style} data={products[index]} />;
                        }}
                    </List>
                )}
            </InfiniteLoader>
        </div>
    )
}