import { ComponentPropsWithoutRef, memo } from "react";
import AddToFavourite from  "assets/wishlist2.svg?react"
import Button from 'shared/UI/Button/Button';
import { addProductToFavourite, FavouriteProduct, removeProductFromFavourite } from "shared/redux/slices/favouriteSlice";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import useEvent from "react-use-event-hook";

interface Props extends ComponentPropsWithoutRef<"button">{
	variant: "circle" | "primary" | "secondary" | "icon"
	data: FavouriteProduct
}

const FavouriteButton = (props: Props) => {
    const {variant, data, ...otherProps} = props
    const isFavourite = useAppSelector(state=>state.favourite.favouriteProducts.find(product=>product.id===data.id))
    const dispatch = useAppDispatch()
    const handleToggleFavouriteProduct = useEvent(() =>{
        isFavourite
            ? dispatch(removeProductFromFavourite(data))
            : dispatch(addProductToFavourite(data))
    })
    
    return (
        <Button variant={variant} size="none" className={`
		size-14
		flex items-center justify-center
		hover:bg-[#db4444]
		${isFavourite ?
            "[&>svg]:hover:fill-white [&>svg]:fill-[#db4444]"
            :"[&>svg]:hover:stroke-white [&>svg]:hover:fill-[#db4444]"}
		${variant==="icon" && "border border-[#7D8184] hover:border-none"}`
        } {...otherProps} onClick={handleToggleFavouriteProduct}>
            <AddToFavourite className={`${variant==="icon"? "size-7" : "size-5"}`}/>
        </Button>
    )
}
export default memo(FavouriteButton)


