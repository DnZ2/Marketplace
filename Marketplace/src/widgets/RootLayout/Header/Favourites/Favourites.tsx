import { Heart } from "lucide-react"
import { useAppSelector } from "../../../../shared/redux/store"
import { memo } from "react"
import { selectWishlistCounter } from "shared/redux/slices/favouriteSlice"
import Link from "shared/UI/Link/Link"


const Favourites = () => {
    const favourite = useAppSelector(selectWishlistCounter)
    return (
        <div className="relative rounded-full hover:bg-[#db4444] hover:cursor-pointer [&>a>svg]:hover:stroke-[#f7f7fc]">
            <Link to="/wishlist">
                <Heart/>
            </Link>
            {favourite>0 &&
            <div className="rounded-full text-xs h-4 w-fit px-1 text-center absolute right-0 top-0 text-white bg-[#DB4444]">
                {favourite}
            </div>}
        </div>
    )
}

export default memo(Favourites)
