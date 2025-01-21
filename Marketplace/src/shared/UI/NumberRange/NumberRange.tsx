import { memo } from "react"
import NumberRangeInputs from "./NumberRangeInputs"
import Range from "./Range"
import { RangeContextProvider } from "./useNumberRange"
import { Diapason } from "shared/redux/query/endpoints"

interface Props{
    initialMin: number
    initialMax: number
    diapason: Diapason
    step?: number
    onSelect: (min: number, max: number)=>void
}

const NumberRange = (props: Props) => {
    return (
        <RangeContextProvider {...props}>
            <NumberRangeInputs />
            <Range step={props.step || 1}/>
        </RangeContextProvider>
    )
}

export default memo(NumberRange)
