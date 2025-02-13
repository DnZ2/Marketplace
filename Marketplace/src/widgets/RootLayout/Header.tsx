import AccountMenuDropdown from "./Header/Account/AccountMenuDropdown"
import HeaderSearch from "./Header/Search/HeaderSearch"
import NavLinks from "./Header/NavLinks"
import Favourites from "./Header/Favourites/Favourites"
import CartDropdown from "./Header/Cart/CartDropdown"
import { ComponentPropsWithoutRef, memo } from "react"

const FlexList = memo(({children}: ComponentPropsWithoutRef<"div">)=> <div className="flex">{children}</div>)

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
                    <FlexList>
                        <Favourites/>
                        <CartDropdown />
                        <AccountMenuDropdown />
                    </FlexList>
                </div>
            </div>
        </header>
    )
}

export default memo(Header)

