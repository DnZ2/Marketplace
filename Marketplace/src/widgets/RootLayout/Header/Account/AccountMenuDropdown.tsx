import { memo } from "react"
import Dropdown from "../../../../shared/UI/Dropdown"
import { useLogoutMutation } from "../../../../shared/redux/query/endpoints/authApi"
import AccountDropdownContent from "./UI/AccountDropdownContent"
import AccountDropdownTrigger from "./UI/AccountDropdownTrigger"
import useEvent from "react-use-event-hook"

const AccountMenuDropdown = () => {

    return (
        <Dropdown className="has-[ul]:hover:bg-[#db4444] [&>div>a>svg]:hover:stroke-[#f7f7fc]">
            <AccountDropdownTrigger/>
            <AccountDropdownContent/>
        </Dropdown>
    )
}

export default memo(AccountMenuDropdown)