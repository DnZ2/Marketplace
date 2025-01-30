import AdminPageLayout from "pages/AdminPage/AdminPageLayout"
import { Navigate } from "react-router-dom"
import { useGetUserQuery } from "shared/redux/query/endpoints/usersApi"
import Loader from "shared/UI/Loader"

const RoutesWithAdminRole = () => {
    
    const {data: user, isLoading} = useGetUserQuery()

    if(isLoading || !user) return <Loader />

    if(!user.roles.includes("ADMIN")) return <Navigate to={"/"} replace/>
    
    return <AdminPageLayout />
}

export default RoutesWithAdminRole
