import CardsVariants from './CardsWrappes.styles';
import { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<"div">{
	layout?: "default" | "cart" | "cart-dropdown" | "search",

}

const CardsWrapper = (props: Props) => {
    const {children, className, layout, ...otherProps} = props
    return (
        <div className={CardsVariants({ layout, className })} {...otherProps}>
            {children}
        </div>
    )
}

export default CardsWrapper
