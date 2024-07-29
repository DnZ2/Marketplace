import MainProductLayout from "../../entities/Product/UI/MainProductLayout"
import CardListLayout from "../../widgets/CardListLayout"
import Button from "../../shared/UI/Button"
import { useDispatch, useSelector } from "react-redux"
import { addFavouritesToCart } from "../../shared/redux/slices/cartSlice"
import EmptyCart from "../../assets/empryCart-Photoroom.png"
import { NavLink } from "react-router-dom"
import { useGetProductsQuery } from "../../shared/redux/query/productsApi"
import Loader from "../../shared/UI/Loader"
const WishlistPage = () => {

	const favouriteProducts = useSelector(state=>state.favourite.favouriteProducts)
	const dispatch = useDispatch()
	const handleAddAllFavouritesToCart = ()=>{
		dispatch(addFavouritesToCart(favouriteProducts))
	}
	const {data, isLoading} = useGetProductsQuery({categoryParam: "Gaming"})
	if(isLoading){
		return <Loader />
	}
  return (
	<div className="container my-20 flex flex-col gap-8">
		{favouriteProducts.length
		?
		<CardListLayout
			title={`Wishlist (${favouriteProducts.length})`}
			titleStyle=" text-xl text-black"
			controls={<Button center="" disabled={!favouriteProducts.length} onClick={handleAddAllFavouritesToCart}>Move All To Bag</Button>}
			showMore={<Button>Show more</Button>}
		>
			<div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-14 gap-x-7">
			{favouriteProducts.map((item)=>{
				return <MainProductLayout
				key={item.id}
				data={item}
				controls="delete"
			/>
			})}
			</div>
		</CardListLayout>
		:
		<figure className="w-full bg-white container mb-14 py-14 rounded-3xl flex justify-center flex-col items-center">
			<img src={EmptyCart} alt="empty" />
			<figcaption className="text-2xl font-semibold">There are no featured products</figcaption>
			<p>Use the <NavLink className="text-blue-400" to="/">catalog</NavLink> or search</p>
		</figure>
		}
		{
			data.products.length &&
			<CardListLayout
			title="Just For You"
			titleStyle=" text-xl text-black"
			>
				<div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-14 gap-x-7">
				{data?.products?.map((item)=>{
					if(item)
					return <MainProductLayout
					data={item}
					key={item.id}
				/>
				})}
				</div>
			</CardListLayout>
		}

	</div>
  )
}

export default WishlistPage