import { ComponentPropsWithoutRef, memo } from 'react';
import {ButtonVariants} from './Button.styles';
import { VariantProps } from 'class-variance-authority';
export interface Props extends ComponentPropsWithoutRef<"button">, VariantProps<typeof ButtonVariants>{}

const Button = memo((props: Props) => {
    const {children, type="button", className, disabled, size, variant, ...other} = props
    return (
        <button type={type} disabled={disabled} className={ButtonVariants({variant, size, className})} {...other}>
            {children}
        </button>
    )
})

export default Button
