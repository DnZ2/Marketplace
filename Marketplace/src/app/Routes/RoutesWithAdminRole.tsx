import { Navigate, Outlet } from "react-router-dom"
import { useGetUserQuery } from "shared/redux/query/endpoints/usersApi"
import Loader from "shared/UI/Loader"

const RoutesWithAdminRole = () => {
    
    const {data: user, isLoading} = useGetUserQuery()

    if(isLoading || !user) return <Loader />

    if(!user.roles.includes("ADMIN")) return <Navigate to={"/"} replace/>
    
    return <Outlet />
}

export default RoutesWithAdminRole
