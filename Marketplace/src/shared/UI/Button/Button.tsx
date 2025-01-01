import { ComponentPropsWithoutRef, FC } from 'react';
import {ButtonVariants} from './Button.styles';
import { VariantProps } from 'class-variance-authority';
interface Props extends ComponentPropsWithoutRef<"button">, VariantProps<typeof ButtonVariants>{}

const Button: FC<Props> = ({children, type="button", className, disabled, size, variant, ...other}) => {

    return (
        <button type={type} disabled={disabled} className={ButtonVariants({variant, size, className})} {...other}>
            {children}
        </button>
    )
}

export default Button
