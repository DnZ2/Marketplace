import { ChangeEvent, memo } from 'react'
import { useRange } from './useNumberRange'
import Input, { Props } from '../Input/Input'
import useEvent from 'react-use-event-hook'

const MinValueInput = (props: Props) => {
    const {min, max, onSubmit, onMaxChange, onMinChange, diapason} = useRange()
    const onBlur = useEvent(()=>{
        if(min>diapason.to){
            onMinChange(diapason.to)
            onMaxChange(diapason.to)
            onSubmit(diapason.to, diapason.to)
        }
        else if(min>max){
            onMaxChange(min)
            onSubmit(min, min)
        }
        else if(min<diapason.from) {
            onMinChange(diapason.from)
            onSubmit(diapason.from, max)
        } 
        else onSubmit(min, max)
    })
    const onChange = useEvent(({target}:ChangeEvent<HTMLInputElement>)=>onMinChange(parseFloat(target.value)))
    return (
        <Input  type="number" value={min} onChange={onChange} onBlur={onBlur} {...props}/>
    )
}

export default memo(MinValueInput)