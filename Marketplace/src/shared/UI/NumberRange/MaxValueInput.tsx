import { ChangeEvent, memo } from 'react'
import { useRange } from './useNumberRange'
import Input, { Props } from '../Input/Input'
import useEvent from 'react-use-event-hook'



const MaxValueInput = (props: Props) => {
    const {max, onMaxChange, diapason} = useRange()
    const onChange = useEvent(({target}:ChangeEvent<HTMLInputElement>)=>{
        const value = parseFloat(target.value)
        if(value){
            if(value>diapason.to) onMaxChange(diapason.to)
            else if(value<diapason.from) onMaxChange(diapason.from)
            else onMaxChange(value)
        }
    })
    return (
        <Input value={max} onChange={onChange} {...props}/>
    )
}

export default memo(MaxValueInput)
