import { NavLink } from "react-router-dom"
const NavLinks = () => {
    return (
        <nav className="flex justify-between items-center gap-12 [&>a]:underline-offset-4">
            <NavLink className="hover:underline" to='/'>Home</NavLink>
            <NavLink className="hover:underline" to='/products'>Products</NavLink>
            <NavLink className="hover:underline" to='/admin'>Admin</NavLink>
        </nav>
    )
}

export default NavLinks
