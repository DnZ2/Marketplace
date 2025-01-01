import NumberInputWrapperVariants from "./NumberInputWrapper.styles"
import { ComponentPropsWithoutRef, FC } from "react"

interface Props extends ComponentPropsWithoutRef<"div">{
	variant: "default" | "secondary"
}

const NumberInputWrapper: FC<Props> = ({children, className, variant}) => {
    return (
        <div className={NumberInputWrapperVariants({variant, className})}>
            {children}
        </div>
    )
}

export default NumberInputWrapper
