import CardsVariants from './CardsWrappes.styles';
import { ComponentPropsWithoutRef, FC } from 'react';

interface Props extends ComponentPropsWithoutRef<"div">{
	layout?: "default" | "cart" | "cart-dropdown" | "search",

}

const CardsWrapper: FC<Props> = ({children, className, layout, ...props}) => {
    return (
        <div className={CardsVariants({ layout, className })} {...props}>
            {children}
        </div>
    )
}

export default CardsWrapper
