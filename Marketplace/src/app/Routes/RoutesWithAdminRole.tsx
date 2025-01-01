import { Navigate, Outlet } from "react-router-dom"
import { useGetUserQuery } from "shared/redux/query/endpoints/usersApi"

const RoutesWithAdminRole = () => {
    
    const {data: user} = useGetUserQuery()
    
    if(!user?.roles?.includes("ADMIN")) return <Navigate to={"/"} replace/>
    
    return <Outlet />
}

export default RoutesWithAdminRole
