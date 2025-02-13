import { ComponentPropsWithoutRef, memo } from "react"
import Button from "../Button/Button"

interface Props extends ComponentPropsWithoutRef<"button">{}

const ModalCancelButton = (props: Props) => {
    const {children, ...otherProps} = props
    return (
        <Button className="mx-auto" variant="secondary" size="secondary" {...otherProps}>{children}</Button>
    )
}
export default memo(ModalCancelButton) 
