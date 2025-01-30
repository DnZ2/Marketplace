import { memo } from "react"
import Input from "../Input/Input"
import { Props } from "../Input/Input"
import { useSelect } from "./useSelect"

const SelectValue = (props: Props)=> {
    const {className, ...otherProps} = props
    const {searchRef, option, onChange} = useSelect()
    return (
        <Input {...otherProps} ref={searchRef} value={option} onInput={onChange} className={`rounded-md w-full ${className}`}/>
    )
}

export default memo(SelectValue)
