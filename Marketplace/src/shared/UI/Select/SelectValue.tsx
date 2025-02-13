import { memo } from "react"
import Input from "../Input/Input"
import { Props } from "../Input/Input"
import { useSelect } from "./useSelect"

const SelectValue = (props: Props)=> {
    const {className, ...otherProps} = props
    const {searchRef, option, onChange} = useSelect()
    return (
        <Input ref={searchRef} value={option} onChange={onChange} className={`rounded-md ${className}`} {...otherProps}/>
    )
}

export default memo(SelectValue)
