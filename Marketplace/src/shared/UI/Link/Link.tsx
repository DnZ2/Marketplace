import { memo } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

interface Props extends NavLinkProps{}

const Link = (props: Props) => {
    const {children, ...otherProps} = props
    return (
        <NavLink {...otherProps} >
            {children}
        </NavLink>
    )
}

export default memo(Link)
