import { FC, ComponentPropsWithoutRef, memo } from "react"

const Form: FC<ComponentPropsWithoutRef<"form">> = ({children, ...props}) => {
    return (
        <form {...props}>
            {children}
        </form>
    )
}

export default memo(Form)
