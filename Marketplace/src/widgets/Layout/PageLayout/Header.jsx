import { NavLink } from "react-router-dom"
import Search from '../../../assets/search.svg?react'
import Wishlist from "../../../assets/wishlist.svg?react"
import AccountMenuDropdown from "../../AccountMenuDropdown"
import { useSelector } from "react-redux"
import CartDropdownList from "../../CartDropdownList"

const Header = () => {
	const favourite = useSelector(state=>state.favourite.favouriteProducts)
  return (
	<header className="sticky top-0 z-50">
    <div className="flex justify-between items-center py-4 border-b bg-white">
	<div className="container flex justify-between items-center">
		<h1>Logo</h1>
	<nav className="flex justify-between items-center gap-12">
		<NavLink to='/'>Home</NavLink>
		<NavLink to='/products'>Products</NavLink>
		<NavLink to='/contact'>Contact</NavLink>
		<NavLink to='/about'>About</NavLink>
	</nav>
	<div className="flex justify-between items-center gap-3">
		<div className="flex justify-between items-center bg-white">
			<input className="pl-3 text-xs" type="text" placeholder="What are you looking for?"/>
			<Search className="cursor-pointer" />
		</div>
		<ul className="flex justify-between items-center">
			<li className="p-2 relative rounded-full hover:bg-[#db4444] hover:cursor-pointer [&>a>svg]:hover:fill-[#f7f7fc]">
				<NavLink to="/wishlist">
					<Wishlist className="w-6 h-6 fill-black " />
				</NavLink>
				{favourite.length ? <div className="rounded-full text-xs h-4 w-fit px-1 text-center absolute right-0 top-0 text-white bg-[#DB4444]">
					{favourite.length}
				</div> : null}
			</li>
			<CartDropdownList />
			<AccountMenuDropdown />
		</ul>
	</div>
	</div>
    </div>
	</header>
  )
}

export default Header
