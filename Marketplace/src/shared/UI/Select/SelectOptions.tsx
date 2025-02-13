import { ComponentPropsWithoutRef, memo, ReactNode } from "react"
import { useSelect } from "./useSelect"
import SelectOption from "./SelectOption"

export interface Props extends ComponentPropsWithoutRef<"div">{
    options: string[]
    filtered?: boolean
    customOption?: ReactNode | ReactNode[]
}

const SelectOptions = (props: Props) => {
    const {options, filtered, className, ...otherProps} = props
    const {option, isOpen} = useSelect()
    if(!isOpen) return null
    const isMatch = (value: string)=> new RegExp(option.toLowerCase()).test(value.toLowerCase())
    const filteredOptions = options.filter((option)=>isMatch(option))
    return (
        <div className={`absolute top-full left-0 w-full z-[1] rounded-b-md ${className}`} {...otherProps}>
            { filtered ?
                <>
                    {filteredOptions.map((option)=>
                        <SelectOption 
                            value={option}
                            key={option}
                            className={className}
                        />)}
                    {!filteredOptions.length && <SelectOption value="No options" disabled/>}
                </>
                :
                options.map((option)=>
                    <SelectOption 
                        value={option}
                        key={option}
                        className={className}
                    />)
            }
        </div>
    )
}

export default memo(SelectOptions)
