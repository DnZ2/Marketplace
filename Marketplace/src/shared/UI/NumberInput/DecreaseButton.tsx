import Minus from "../../../assets/minus.svg?react"
import { ComponentPropsWithoutRef, FC, memo } from "react"

const DecreaseButton: FC<ComponentPropsWithoutRef<"button">> = ({...props}) => {
    return (
        <button className="w-10 h-full rounded-tl rounded-bl border border-[#7D8184] flex justify-center items-center" {...props}>
            <Minus className="fill-black rotate-180"/>
        </button>
    )
}

export default memo(DecreaseButton)