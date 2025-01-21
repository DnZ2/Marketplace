import { ChangeEvent, memo } from 'react'
import { useRange } from './useNumberRange'
import Input, { Props } from '../Input/Input'
import useEvent from 'react-use-event-hook'



const MinValueInput = (props: Props) => {
    const {min, onMinChange, diapason} = useRange()
    const onChange = useEvent(({target}:ChangeEvent<HTMLInputElement>)=>{
        const value = parseFloat(target.value)
        if(value){
            if(value>diapason.to) onMinChange(diapason.to)
            else if(value<diapason.from) onMinChange(diapason.from)
            else onMinChange(value)
        }
    })
    return (
        <Input value={min} onChange={onChange} {...props}/>
    )
}

export default memo(MinValueInput)