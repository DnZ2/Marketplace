import { useGetOrdersQuery } from "shared/redux/query/endpoints/usersApi"
import Loader from "shared/UI/Loader"
import UserOrder from "./UserOrder"

export const UserOrdersPage = () => {
    const {data: orders, isLoading:isOrdersLoading} = useGetOrdersQuery()

    if(isOrdersLoading && !orders){
        return <Loader />
    }
    return (
        <div>
            <h1 className="text-2xl mb-7">My orders</h1>
            <div  className="flex flex-col gap-2 mb-7">
                {
                    orders?.map((item)=>
                        <UserOrder key={item.id} order={item}/>
                    )
                }
            </div>
        </div>
    )
}


