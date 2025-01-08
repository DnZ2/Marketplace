import { useAppSelector } from "shared/redux/store"
import Link from "shared/UI/Link/Link"

const SideBar = () => {
    const wishlist = useAppSelector(store=>store.favourite.favouriteProducts)
    return (
        <aside>
            <nav>
                <h1 className="font-semibold">Manage My Account</h1>
                <ul className="ml-9 my-4 flex flex-col gap-2">
                    <li>
                        <Link to="/profile" end className={({isActive})=>isActive ? "text-[#db4444]" : "hover:text-[#db4444]"}>Profile</Link>
                    </li>
                    <li>
                        <Link to="addresses" className={({isActive})=>isActive ? "text-[#db4444]" : "hover:text-[#db4444]"}>Address Book</Link>
                    </li>
                    <li>
                        <Link to="orders" className={({isActive})=>isActive ? "text-[#db4444]" : "hover:text-[#db4444]"}>Orders</Link>
                    </li>
                    <li>
                        <Link to="reviews" className={({isActive})=>isActive ? "text-[#db4444]" : "hover:text-[#db4444]"}>Reviews</Link>
                    </li>
                </ul>
                <h1 className="font-semibold">Wishlist</h1>
                <ul className="ml-9 my-4 flex flex-col gap-2">
                    {wishlist.map((item)=>
                        <li key={item.id}>
                            <Link to={`/products/${item.id}`} className="hover:text-[#db4444]">{item.title}</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar
