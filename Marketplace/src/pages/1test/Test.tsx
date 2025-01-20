import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AdminProductCard from "pages/AdminPage/Product/AdminProductCard"
import { Product, useLazyGetProductsQuery } from "shared/redux/query/endpoints";
import { CSSProperties, useState } from "react";


export const Test = () => {
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState<Product[]>([]);
    const [hasNextPage, setHasNextPage] = useState(true);
  
    const [fetchProducts, { isFetching }] = useLazyGetProductsQuery();
  
    const loadMoreItems = async () => {
        if (isFetching || !hasNextPage) return;
  
        const { data } = await fetchProducts({ page, limit: "10" });
        if (data) {
            setProducts((prev) => [...prev, ...data.products]);
            setHasNextPage(data.pages > page);
            setPage((prev) => prev + 1);
        }
    };
  
    const itemCount = products.length + (hasNextPage ? 1 : 0);
    const isItemLoaded = (index: number) => index < products.length;
  
    const ListItem = ({ index, style }: {index: number, style: CSSProperties}) => {
        if (!isItemLoaded(index)) return <div style={style}>Loading...</div>;
        return <AdminProductCard style={style} data={products[index]} />;
    };

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
                        {ListItem}
                    </List>
                )}
            </InfiniteLoader>
        </div>
    )
}