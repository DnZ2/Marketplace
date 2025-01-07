import Plus from "../../../assets/plus.svg?react"
import { ComponentPropsWithoutRef, FC, memo } from "react"

const IncreaseButton: FC<ComponentPropsWithoutRef<"button">> = ({...props}) => {
    return (
        <button className="p-3 h-full bg-[#db4444] flex justify-center items-center rounded-tr rounded-br" {...props}>
            <Plus />
        </button>
    )
}

export default memo(IncreaseButton)
