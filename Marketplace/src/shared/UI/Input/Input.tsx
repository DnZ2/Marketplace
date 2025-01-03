import { ComponentPropsWithoutRef, forwardRef, ForwardRefRenderFunction } from 'react';
import {InputVariants, SpecialProps} from './Input.styles';

export interface Props extends Omit<ComponentPropsWithoutRef<"input">, "size">, SpecialProps {}


const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (props, ref) => {
    const {variant, size, touched, invalid, disabled, className, ...otherProps } = props
	  return (
        <input
            ref={ref}
            disabled={disabled}
            className={InputVariants({variant, size, touched, invalid: touched ? invalid : "null", disabled, className})}
            {...otherProps}
        />
	  );
}
export default forwardRef(Input)