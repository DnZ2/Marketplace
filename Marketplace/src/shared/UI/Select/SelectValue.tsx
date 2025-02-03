import { memo } from "react"
import Input from "../Input/Input"
import { Props } from "../Input/Input"
import { useSelect } from "./useSelect"

const SelectValue = (props: Props)=> {
    const {className, ...otherProps} = props
    const {searchRef, option, onChange, onBlur} = useSelect()
    return (
        <Input {...otherProps} ref={searchRef} value={option} onChange={onChange} onBlur={onBlur} className={`rounded-md w-full ${className}`}/>
    )
}

export default memo(SelectValue)
