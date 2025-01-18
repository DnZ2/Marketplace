import {  memo, MouseEventHandler } from "react"
import { ChevronDown } from "lucide-react"



interface Props {
	increase: MouseEventHandler<HTMLButtonElement>
	decrease: MouseEventHandler<HTMLButtonElement>
}

const NumberInputControlls = (props: Props) => {
    const {increase, decrease} = props
    return (
        <div className="bg-white absolute top-1/2 -translate-y-1/2 right-0 flex flex-col">
            <button type="button" className="px-2 py-[5px]" onClick={increase}>
                <ChevronDown className="rotate-180"/>
            </button>
            <button type="button" className="px-2 py-[5px]" onClick={decrease}>
                <ChevronDown/>
            </button>
        </div>
    )
}

export default memo(NumberInputControlls)
