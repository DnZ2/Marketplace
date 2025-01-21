import { memo } from "react"
import MaxValueInput from "./MaxValueInput"
import MinValueInput from "./MinValueInput"

const NumberRangeInputs = () => {
    return (
        <div className="flex items-center">
            <MinValueInput type="number" />
            <span className="p-2"> - </span>
            <MaxValueInput type="number"/>
        </div>
    )
}

export default memo(NumberRangeInputs)
