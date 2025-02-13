import { FC, ComponentPropsWithoutRef } from "react"

interface Props extends ComponentPropsWithoutRef<"div"> {
    row?: boolean
}

const FormField: FC<Props> = ({children, row, className, ...props}) => {
    return (
        <div className={`flex ${row ? "flex-row" : "flex-col"} ${className}`} {...props}>
            {children}
        </div>
    )
}

export default FormField
