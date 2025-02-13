import { FC, ComponentPropsWithoutRef } from "react"

const ErrorMessage: FC<ComponentPropsWithoutRef<"span">> = ({children}) => {
    return (
        <span className="text-red-400 h-6">{children}</span>
    )
}

export default ErrorMessage
