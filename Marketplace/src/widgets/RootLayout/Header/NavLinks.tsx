import { memo } from "react"
import Link from "shared/UI/Link/Link"
const NavLinks = () => {
    return (
        <nav className="flex justify-between items-center gap-12 [&>a]:underline-offset-4">
            <Link className="hover:underline" to='/'>Home</Link>
            <Link className="hover:underline" to='/products'>Products</Link>
            <Link className="hover:underline" to='/admin'>Admin</Link>
        </nav>
    )
}

export default memo(NavLinks)
