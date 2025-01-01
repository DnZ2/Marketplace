import { ComponentPropsWithoutRef, FC } from 'react'
import Button from '../Button/Button'

interface Props extends ComponentPropsWithoutRef<"button">{}

const ModalAcceptButton: FC<Props> = ({children, ...props}) => {
    return (
        <Button className="mx-auto" {...props}>{children}</Button>
    )
}

export default ModalAcceptButton
