
import { memo } from "react"
import { Slider } from "shared/shadcn/components/ui/slider"
import { useRange } from "./useNumberRange"
import useEvent from "react-use-event-hook"

interface Props {
    step: number
}

const Range = (props: Props) => {
    const {max, min, onMaxChange, onMinChange, onSubmit, diapason} = useRange()
    const onValueChange = useEvent((value: number[]) =>{
        onMaxChange(Math.max(...value))
        onMinChange(Math.min(...value))
    })
    const onValueCommit = useEvent((value: number[])=>{
        onSubmit(Math.min(...value), Math.max(...value))
    })
    return <Slider defaultValue={[min, max]} min={diapason.from} max={diapason.to} onValueChange={onValueChange} onValueCommit={onValueCommit} {...props}/>
}

export default memo(Range)
