import { ComponentPropsWithoutRef,  memo } from 'react'
import Button from '../Button/Button'

interface Props extends ComponentPropsWithoutRef<"button">{}

const ModalAcceptButton  = (props: Props) => {
    const {children, ...otherProps} = props
    return (
        <Button className="mx-auto" {...otherProps}>{children}</Button>
    )
}

export default memo(ModalAcceptButton)
