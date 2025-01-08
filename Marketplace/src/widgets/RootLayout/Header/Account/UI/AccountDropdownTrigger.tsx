import Profile from "../../../../../assets/profile.svg?react"
import { memo } from "react"
import Link from "shared/UI/Link/Link"
const AccountDropdownTrigger = () => {
    return (
        <div className="p-1 relative rounded-full hover:cursor-pointer">
            <Link to="/profile">
                <Profile className="w-[30px] h-[30px] fill-none stroke-black stroke-[1.5]" />
            </Link>
            <div className="rounded-full h-2 w-2 absolute right-1 top-1 bg-[#DB4444]"></div>
        </div>
    )
}

export default memo(AccountDropdownTrigger)
