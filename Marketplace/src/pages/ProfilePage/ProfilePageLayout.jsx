import { useSelector } from "react-redux"
import { Outlet, NavLink } from "react-router-dom"
const ProfilePageLayout = () => {
	const wishlist = useSelector(store=>store.favourite.favouriteProducts)
  return (
	<div className="container my-20 ">
		<div className="flex gap-[100px]">
			<aside>
				<nav>
					<h1 className="font-semibold">Manage My Account</h1>
					<ul className="ml-9 my-4 flex flex-col gap-2">
						<li>
							<NavLink to="/profile" end className={({isActive})=>isActive ? "text-[#db4444]" : "hover:text-[#db4444]"}>Profile</NavLink>
						</li>
						<li>
							<NavLink to="addresses" className={({isActive})=>isActive ? "text-[#db4444]" : "hover:text-[#db4444]"}>Address Book</NavLink>
						</li>
						<li>
							<NavLink to="orders" className={({isActive})=>isActive ? "text-[#db4444]" : "hover:text-[#db4444]"}>Orders</NavLink>
						</li>
						<li>
							<NavLink to="reviews" className={({isActive})=>isActive ? "text-[#db4444]" : "hover:text-[#db4444]"}>Reviews</NavLink>
						</li>
					</ul>
					<h1 className="font-semibold">Wishlist</h1>
					<ul className="ml-9 my-4 flex flex-col gap-2">
						{wishlist.map((item)=>
							<li key={item.id}>
								<NavLink to={`/products/${item.id}`} className="hover:text-[#db4444]">{item.title}</NavLink>
							</li>
						)}
					</ul>
				</nav>
			</aside>
			<div className="flex-grow">
				<Outlet/>
			</div>
		</div>
	</div>
  )
}

export default ProfilePageLayout
