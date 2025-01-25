import { memo } from "react"
import MaxValueInput from "./MaxValueInput"
import MinValueInput from "./MinValueInput"

const NumberRangeInputs = () => {
    return (
        <div className="flex items-center">
            <MinValueInput  />
            <span className="p-2"> - </span>
            <MaxValueInput />
        </div>
    )
}

export default memo(NumberRangeInputs)
