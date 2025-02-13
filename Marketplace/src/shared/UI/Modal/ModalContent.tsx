import { ComponentPropsWithoutRef, FC } from "react"

const ModalContent: FC<ComponentPropsWithoutRef<"div">> = ({children, className}) => {
    return (
        <div className={`flex-grow ${className}`}>
            {children}
        </div>
    )
}

export default ModalContent
