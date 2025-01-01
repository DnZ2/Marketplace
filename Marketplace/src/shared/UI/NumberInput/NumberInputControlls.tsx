import { FC, MouseEventHandler } from "react"
import Arrow from "../../../assets/fa-angle-down.svg?react"



interface Props {
	increase: MouseEventHandler<HTMLButtonElement>
	decrease: MouseEventHandler<HTMLButtonElement>
}

const NumberInputControlls: FC<Props> = ({increase, decrease}) => {
    return (
        <div className="bg-white absolute top-1/2 -translate-y-1/2 right-0 flex flex-col">
            <button type="button" className="px-2 py-[5px]" onClick={increase}>
                <Arrow className="fill-black rotate-180"/>
            </button>
            <button type="button" className="px-2 py-[5px]" onClick={decrease}>
                <Arrow className="fill-black"/>
            </button>
        </div>
    )
}

export default NumberInputControlls
