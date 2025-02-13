import { ComponentPropsWithoutRef, FC, memo } from 'react'
import Link from 'shared/UI/Link/Link'

interface Props extends ComponentPropsWithoutRef<"a">{
	id: string
}

const ProductLink: FC<Props> = ({children, className, id}) => {
    return (
        <Link to={`/products/${id}`} className={`text-base ${className}`}>
            {children}
        </Link>
    )
}

export default memo(ProductLink)
