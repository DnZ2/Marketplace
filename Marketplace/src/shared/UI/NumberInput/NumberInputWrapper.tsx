import NumberInputWrapperVariants, { SpecialProps } from "./NumberInputWrapper.styles"
import { ComponentPropsWithoutRef } from "react"

interface Props extends ComponentPropsWithoutRef<"div">, SpecialProps{
	variant: "default" | "secondary"
}

const NumberInputWrapper = (props: Props) => {
    const {children, className, variant} = props
    return (
        <div className={NumberInputWrapperVariants({variant, className})}>
            {children}
        </div>
    )
}

export default NumberInputWrapper
