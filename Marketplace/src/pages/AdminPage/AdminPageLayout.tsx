import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Link from 'shared/UI/Link/Link'

const AdminPageLayout = () => {
    return (
        <div className='container my-11'>
            <div className='flex gap-3 mb-3'>
                <Link to="/product-manager" className={({ isActive }) => isActive && "underline text-[#db4444]" || ""}>Products</Link>
                <Link to="/categories-manager" className={({ isActive }) => isActive && "underline text-[#db4444]" || ""}>Categories</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default memo(AdminPageLayout)
