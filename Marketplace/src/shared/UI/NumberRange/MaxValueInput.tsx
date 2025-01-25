import { ChangeEvent, memo } from 'react'
import { useRange } from './useNumberRange'
import Input, { Props } from '../Input/Input'
import useEvent from 'react-use-event-hook'

const MaxValueInput = (props: Props) => {
    const {max, min, onSubmit, onMinChange, onMaxChange, diapason} = useRange()
    const onBlur = useEvent(()=>{
        if(max<diapason.from){
            onMinChange(diapason.from)
            onMaxChange(diapason.from)
            onSubmit(diapason.from, diapason.from)
        }
        else if(max<min){
            onMinChange(max)
            onSubmit(max, max)
        }
        else if(max>diapason.to) {
            onMaxChange(diapason.to)
            onSubmit(min, diapason.to)
        } 
        else onSubmit(min, max)
    })
    const onChange = useEvent(({target}:ChangeEvent<HTMLInputElement>)=>onMaxChange(parseFloat(target.value)))
    return (
        <Input type="number" value={max} onBlur={onBlur} onChange={onChange} {...props}/>
    )
}

export default memo(MaxValueInput)
