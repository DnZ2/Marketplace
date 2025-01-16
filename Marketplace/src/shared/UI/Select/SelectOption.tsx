import { ComponentPropsWithoutRef, memo } from "react"
import { useSelect } from "./useSelect"
import { Check } from "lucide-react"

interface Props extends ComponentPropsWithoutRef<"button">{
    value: string
}

const SelectOption = (props: Props) => {
    const {value, className, ...otherProps} = props
    const {option, onPickOption} = useSelect()
    return (
        <button onClick={onPickOption} className={`flex items-center justify-between w-full p-2 ${className}`} {...otherProps}>
            {value}
            {option===value && <Check />}
        </button>
    )
}

export default memo(SelectOption)
