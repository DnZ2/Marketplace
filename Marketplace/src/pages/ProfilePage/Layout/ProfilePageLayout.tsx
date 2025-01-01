import { Outlet } from "react-router-dom"
import SideBar from "./UI/SideBar"
const ProfilePageLayout = () => {
    return (
        <div className="container my-20 ">
            <div className="flex gap-[100px]">
                <SideBar/>
                <div className="flex-grow">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePageLayout
