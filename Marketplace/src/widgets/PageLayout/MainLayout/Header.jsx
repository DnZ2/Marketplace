import AccountMenuDropdown from "./Header/Features/Account/AccountMenuDropdown"
import HeaderSearch from "./Header/Search/HeaderSearch"
import NavLinks from "./Header/NavLinks"
import Favourites from "./Header/Features/Favourites"
import CartDropdown from "./Header/Features/Cart/CartDropdown"
const Header = () => {
  return (
	<header className="sticky top-0 z-50 bg-white border-b">
		<div className="container py-4 flex justify-between items-center">
			<div className="flex gap-40 items-center">
				<h1>Logo</h1>
				<NavLinks />
			</div>
			<div className="flex items-center gap-3">
				<HeaderSearch />
				<div className="flex">
					<Favourites/>
					<CartDropdown />
					<AccountMenuDropdown />
				</div>
			</div>
		</div>
	</header>
  )
}

export default Header
