import Wishlist from "assets/wishlist.svg?react"
import { useAppSelector } from "../../../../shared/redux/store"
import { memo } from "react"
import { selectWishlistCounter } from "shared/redux/slices/favouriteSlice"
import Link from "shared/UI/Link/Link"

const WishlistIcon = memo(Wishlist)

const Favourites = () => {
    const favourite = useAppSelector(selectWishlistCounter)
    return (
        <div className="p-2 relative rounded-full hover:bg-[#db4444] hover:cursor-pointer [&>a>svg]:hover:fill-[#f7f7fc]">
            <Link to="/wishlist">
                <WishlistIcon className="w-6 h-6 fill-black " />
            </Link>
            {favourite>0 &&
            <div className="rounded-full text-xs h-4 w-fit px-1 text-center absolute right-0 top-0 text-white bg-[#DB4444]">
                {favourite}
            </div>}
        </div>
    )
}

export default memo(Favourites)
