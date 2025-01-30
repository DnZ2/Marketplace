import { memo } from "react"
import Range from "./Range"
import { RangeContextProvider } from "./useNumberRange"
import { Diapason } from "shared/redux/query/endpoints"
import MaxValueInput from "./MaxValueInput"
import MinValueInput from "./MinValueInput"

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
            <div className="flex items-center">
                <MinValueInput  />
                <span className="p-2"> - </span>
                <MaxValueInput />
            </div>
            <Range step={props.step || 1}/>
        </RangeContextProvider>
    )
}

export default memo(NumberRange)
