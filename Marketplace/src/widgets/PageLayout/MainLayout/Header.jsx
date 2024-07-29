import AccountMenuDropdown from "./UI/Features/Account/AccountMenuDropdown"
import HeaderSearch from "./UI/Search/HeaderSearch"
import NavLinks from "./UI/NavLinks"
import Favourites from "./UI/Features/Favourites"
import CartDropdown from "./UI/Features/Cart/CartDropdown"
const Header = () => {
  return (
	<header className="sticky top-0 z-50 bg-white border-b">
		<div className="container py-4 flex justify-between items-center">
			<h1>Logo</h1>
			<NavLinks />
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
