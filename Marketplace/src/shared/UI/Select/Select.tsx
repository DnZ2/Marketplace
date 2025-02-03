import { ComponentPropsWithoutRef, memo} from "react"
import { SelectContextProvider, useSelect } from "./useSelect"
interface WrapperProps extends ComponentPropsWithoutRef<"div">{}
interface SelectProps extends Omit<ComponentPropsWithoutRef<"div">, "onSelect">{
    initial: string
    options: string[]
    onSelect: (value: string)=>void
    onReset?: ()=>void
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
    const {initial,options, onSelect, onReset,children, className,...otherProps} = props
    return (
        <SelectContextProvider initial={initial} options={options} onSelect={onSelect} onReset={onReset}>
            <SelectWrapper className={className} {...otherProps}>{children}</SelectWrapper>
        </SelectContextProvider>
    )
}

export default memo(Select)