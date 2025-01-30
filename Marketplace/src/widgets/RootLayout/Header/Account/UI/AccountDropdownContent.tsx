import { ComponentPropsWithoutRef, memo } from "react"
import Link from "shared/UI/Link/Link"
import { LogOut, ShoppingBag, Star, UserPen } from "lucide-react"
import { useLogoutMutation } from "shared/redux/query/endpoints"
import useEvent from "react-use-event-hook"
import Button from "shared/UI/Button/Button"

interface Props extends ComponentPropsWithoutRef<"li"> {}

const AccountDropdownContent = (props: Props)=> {
    const [logout] = useLogoutMutation()
    const handleLogout = useEvent(async()=>{
        await logout().unwrap()
    })
    return (
        <ul className="flex flex-col items-start gap-4 bg-black bg-opacity-30 backdrop-blur-md w-[220px]">
            <li className="w-full">
                <Link to="/profile" className="flex items-center justify-between gap-4">
                    <UserPen />
                    <span className="text-white text-sm">Manage My Account</span>
                </Link>
            </li>
            <li className="w-full">
                <Link to="/profile/orders" className="flex items-center justify-between gap-4">
                    <ShoppingBag />
                    <span className="text-white text-sm">My Orders</span>
                </Link>
            </li>
            <li className="w-full">
                <Link to="/profile/reviews" className="flex items-center justify-between gap-4">
                    <Star />
                    <span className="text-white text-sm">My Reviews</span>
                </Link>
            </li>
            <li className="w-full">
                <Button onClick={handleLogout} variant="empty" size="empty" className="flex items-center justify-between gap-4">
                    <LogOut />
                    <span className="text-white text-sm">Logout</span>
                </Button>
            </li>
        </ul>
    )
}

export default memo(AccountDropdownContent)
