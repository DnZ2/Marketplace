import { ComponentPropsWithoutRef, forwardRef, ForwardRefRenderFunction } from 'react';

const HeaderSearchWrapper: ForwardRefRenderFunction<HTMLDivElement, ComponentPropsWithoutRef<"div">> = ({children, ...props}, ref) => {
    return (
        <div ref={ref} className="flex items-center relative rounded max-w-60 min-w-10" {...props}>
            {children}
        </div>
    )
}

export default forwardRef(HeaderSearchWrapper)