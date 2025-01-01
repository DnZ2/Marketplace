import ProfileIcon from "assets/profile.svg?react"
import OrdersIcon from "assets/icon-mallbag.svg?react"
import ReviewsIcon from "assets/Icon-Reviews.svg?react"
import LogoutIcon from "assets/Icon-logout.svg?react"
import { ComponentPropsWithoutRef, FC, memo, MouseEventHandler } from "react"

interface Props extends ComponentPropsWithoutRef<"li"> {
	logout: MouseEventHandler<HTMLLIElement>
}

const AccountDropdownContent: FC<Props> = ({logout})=> {
    return (
        <ul className="flex flex-col items-start p-4 gap-4 bg-black bg-opacity-30 backdrop-blur-md w-[220px]">
            <li className="flex items-center justify-between gap-4">
                <ProfileIcon className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.5]"/>
                <span className="text-white text-sm">Manage My Account</span>
            </li>
            <li className="flex items-center justify-between gap-4">
                <OrdersIcon className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.5]"/>
                <span className="text-white text-sm">My Orders</span>
            </li>
            <li className="flex items-center justify-between gap-4">
                <ReviewsIcon className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.5]"/>
                <span className="text-white text-sm">My Reviews</span>
            </li>
            <li className="flex items-center justify-between gap-4" onClick={logout}>
                <LogoutIcon className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.5]"/>
                <span className="text-white text-sm">Logout</span>
            </li>
        </ul>
    )
}

export default memo(AccountDropdownContent)
