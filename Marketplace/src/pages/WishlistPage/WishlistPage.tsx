import CardListLayout from "../../widgets/CardListLayout"
import Button from "../../shared/UI/Button/Button"
import { useAppDispatch, useAppSelector } from "../../shared/redux/store"
import { addFavouritesToCart } from "../../shared/redux/slices/cartSlice"
import EmptyCart from "../../assets/empryCart-Photoroom.png"
import { NavLink } from "react-router-dom"
import CardsWrapper from "../../shared/UI/CardsWrapper"
import WishlistProductCard from "./UI/WishlistProductCard"
export const WishlistPage = () => {
    const favouriteProducts = useAppSelector(state=>state.favourite.favouriteProducts)
    const dispatch = useAppDispatch()
    const handleAddAllFavouritesToCart = ()=>{
        dispatch(addFavouritesToCart(favouriteProducts))
    }
    return (
        <div className="container my-20 flex flex-col gap-8">
            {favouriteProducts.length
                ?
                <CardListLayout
                    title={`Wishlist (${favouriteProducts.length})`}
                    titleStyle=" text-xl text-black"
                    controls={<Button disabled={!favouriteProducts.length} onClick={handleAddAllFavouritesToCart}>Move All To Bag</Button>}
                    showMore={<Button className="mx-auto">Show more</Button>}
                >
                    <CardsWrapper>
                        {favouriteProducts.map((item)=>
                            <WishlistProductCard
                                key={item.id}
                                data={item}
                            />
                        )}
                    </CardsWrapper>
                </CardListLayout>
                :
                <figure className="w-full bg-white container mb-14 py-14 rounded-3xl flex justify-center flex-col items-center">
                    <img src={EmptyCart} alt="empty" />
                    <figcaption className="text-2xl font-semibold">There are no featured products</figcaption>
                    <p>Use the <NavLink className="text-blue-400" to="/">catalog</NavLink> or search</p>
                </figure>
            }
        </div>
    )
}

