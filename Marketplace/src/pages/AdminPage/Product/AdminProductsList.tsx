import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AdminProductCard from "./AdminProductCard"
import { CSSProperties, memo } from "react"
import { Product } from "shared/redux/query/endpoints";

interface Props {
    data: Product[]
    hasNextPage: boolean
    loadMore: ()=>void
}

const AdminProductsList = (props: Props) => {
    const {data, loadMore, hasNextPage} = props
    const isItemLoaded = (index: number) =>hasNextPage || index < data.length
    const itemCount =  hasNextPage ? data.length + 1 : data.length;


    const ListItem = ({index, style}: {index: number, style: CSSProperties})=>{
        if(!isItemLoaded(index)) return <span style={style}>loader</span>
        return <AdminProductCard style={style} data={data[index]}/>
    }

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
                loadMoreItems={loadMore}
                threshold={3}
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

export default memo(AdminProductsList)
