import { memo, useCallback } from "react"
import Dropdown from "../../../../features/Dropdown"
import { useLogoutMutation } from "../../../../shared/redux/query/endpoints/authApi"
import AccountDropdownContent from "./UI/AccountDropdownContent"
import AccountDropdownTrigger from "./UI/AccountDropdownTrigger"

const AccountMenuDropdown = () => {
    const [logout] = useLogoutMutation()
    const handleLogout = useCallback(async()=>{
        await logout().unwrap()
        localStorage.removeItem("token")
    }, [])
    return (
        <Dropdown className="has-[ul]:hover:bg-[#db4444] [&>div>a>svg]:hover:stroke-[#f7f7fc]">
            <AccountDropdownTrigger/>
            <AccountDropdownContent logout={handleLogout}/>
        </Dropdown>
    )
}

export default memo(AccountMenuDropdown)