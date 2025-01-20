import { User } from "lucide-react"
import { memo } from "react"
import Link from "shared/UI/Link/Link"
const AccountDropdownTrigger = () => {
    return (
        <div className="relative rounded-full hover:cursor-pointer">
            <Link className="block" to="/profile">
                <User />
            </Link>
            <div className="rounded-full h-2 w-2 absolute right-1 top-1 bg-[#DB4444]"></div>
        </div>
    )
}

export default memo(AccountDropdownTrigger)
