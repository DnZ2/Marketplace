import { memo } from "react"
import Dropdown from "../../../../features/Dropdown"
import { useLogoutMutation } from "../../../../shared/redux/query/endpoints/authApi"
import AccountDropdownContent from "./UI/AccountDropdownContent"
import AccountDropdownTrigger from "./UI/AccountDropdownTrigger"
import useEvent from "react-use-event-hook"

const AccountMenuDropdown = () => {
    const [logout] = useLogoutMutation()
    const handleLogout = useEvent(async()=>{
        await logout().unwrap()
    })
    return (
        <Dropdown className="has-[ul]:hover:bg-[#db4444] [&>div>a>svg]:hover:stroke-[#f7f7fc]">
            <AccountDropdownTrigger/>
            <AccountDropdownContent logout={handleLogout}/>
        </Dropdown>
    )
}

export default memo(AccountMenuDropdown)