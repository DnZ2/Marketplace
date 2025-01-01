import { ComponentPropsWithoutRef, FC } from 'react'
import { NavLink } from 'react-router-dom'

interface Props extends ComponentPropsWithoutRef<"a">{
	id: string
}

const ProductLink: FC<Props> = ({children, className, id}) => {
    return (
        <NavLink to={`/products/${id}`} className={`text-base ${className}`}>
            {children}
        </NavLink>
    )
}

export default ProductLink
