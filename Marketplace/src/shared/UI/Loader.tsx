import { memo } from "react"

const Loader = () => {
    return (
        <div className="flex flex-grow justify-center items-center">
            <div className="size-32 animate-spin border-[16px] rounded-full border-e-transparent border-black"></div>
        </div>
    )
}

export default memo(Loader)
