import { ComponentPropsWithoutRef, memo} from "react"
import { SelectContextProvider, useSelect } from "./useSelect"
interface WrapperProps extends ComponentPropsWithoutRef<"div">{}
interface SelectProps extends Omit<ComponentPropsWithoutRef<"div">, "onSelect">{
    initial: string
    onSelect?: (value: string)=>void
    onReset?: ()=>void
    onClose?: (value: string)=>void
}
const SelectWrapper = memo((props: WrapperProps) => {
    const {children, className,...otherProps} = props
    const {triggerRef} = useSelect()
    return (
        <div ref={triggerRef} className={`relative ${className}`} {...otherProps}>
            {children}
        </div>
    )
})

const Select = (props: SelectProps) => {
    const {initial,onSelect, onReset, onClose, children, className,...otherProps} = props
    return (
        <SelectContextProvider initial={initial} onSelect={onSelect} onReset={onReset} onClose={onClose}>
            <SelectWrapper className={className} {...otherProps}>{children}</SelectWrapper>
        </SelectContextProvider>
    )
}

export default memo(Select)