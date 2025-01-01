import { ComponentPropsWithoutRef, FC } from "react"
import Button from "../Button/Button"

interface Props extends ComponentPropsWithoutRef<"button">{}

const ModalCancelButton: FC<Props> = ({children, ...props}) => {
    return (
        <Button className="mx-auto" variant="secondary" size="secondary" {...props}>{children}</Button>
    )
}
export default ModalCancelButton
