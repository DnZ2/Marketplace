import { ComponentPropsWithoutRef, FC } from "react";
import AddToFavourite from  "../../../assets/wishlist2.svg?react"
import Button from '../../../shared/UI/Button/Button';
import { FavouriteProduct } from "../../../shared/redux/slices/favouriteSlice";

interface Props extends ComponentPropsWithoutRef<"button">{
	variant: "circle" | "primary" | "secondary" | "icon"
	isFavourite?: FavouriteProduct
}

const FavouriteButton: FC<Props> = ({variant, isFavourite, ...props}) => {
    return (
        <Button variant={variant} size="none" className={`
		size-14
		flex items-center justify-center
		hover:bg-[#db4444]
		${isFavourite ?
            "[&>svg]:hover:fill-white [&>svg]:fill-[#db4444]"
            :"[&>svg]:hover:stroke-white [&>svg]:hover:fill-[#db4444]"}
		${variant==="icon" && "border border-[#7D8184] hover:border-none"}`
        } {...props}>
            <AddToFavourite className={`${variant==="icon"? "size-7" : "size-5"}`}/>
        </Button>
    )
}
export default FavouriteButton
