import { ComponentPropsWithoutRef, memo } from "react"

interface Props extends ComponentPropsWithoutRef<"h1">{}

const ModalTitle = (props: Props) => {
    const {children} = props
    return (
        <h1 className="text-4xl">{children}</h1>
    )
}

export default memo(ModalTitle)
