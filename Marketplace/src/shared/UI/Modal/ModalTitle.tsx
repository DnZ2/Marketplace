import { ComponentPropsWithoutRef, FC } from "react"

interface Props extends ComponentPropsWithoutRef<"h1">{}

const ModalTitle: FC<Props> = ({children}) => {
    return (
        <h1 className="text-4xl">{children}</h1>
    )
}

export default ModalTitle
