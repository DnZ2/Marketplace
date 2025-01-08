import ProfileIcon from "assets/profile.svg?react"
import OrdersIcon from "assets/icon-mallbag.svg?react"
import ReviewsIcon from "assets/Icon-Reviews.svg?react"
import LogoutIcon from "assets/Icon-logout.svg?react"
import { ComponentPropsWithoutRef, memo, MouseEventHandler } from "react"
import Link from "shared/UI/Link/Link"

interface Props extends ComponentPropsWithoutRef<"li"> {
	logout: MouseEventHandler<HTMLLIElement>
}

const AccountDropdownContent = ({logout}: Props)=> {
    return (
        <ul className="flex flex-col items-start gap-4 bg-black bg-opacity-30 backdrop-blur-md w-[220px]">
            <li className="w-full">
                <Link to="/profile" className="flex items-center justify-between gap-4">
                    <ProfileIcon className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.5]"/>
                    <span className="text-white text-sm">Manage My Account</span>
                </Link>
            </li>
            <li className="w-full">
                <Link to="/profile/orders" className="flex items-center justify-between gap-4">
                    <OrdersIcon className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.5]"/>
                    <span className="text-white text-sm">My Orders</span>
                </Link>
            </li>
            <li className="w-full">
                <Link to="/profile/reviews" className="flex items-center justify-between gap-4">
                    <ReviewsIcon className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.5]"/>
                    <span className="text-white text-sm">My Reviews</span>
                </Link>
            </li>
            <li className="flex items-center justify-between gap-4 w-full" onClick={logout}>
                <LogoutIcon className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.5]"/>
                <span className="text-white text-sm">Logout</span>
            </li>
        </ul>
    )
}

export default memo(AccountDropdownContent)
