import { useScrollButton } from "./useScrollButtonHook"
import ArrowUp from "../../assets/arrowUp.svg?react"
import { useEffect } from "react";

const ScrollButton = () => {
    const {offset, savedPosition, handleScroll, setSavedPosition} = useScrollButton(0);
    useEffect(()=>{
        if(offset>savedPosition-500){
            setSavedPosition(0)
        }
    }, [offset])
    return (
        <>
            {
                savedPosition>0
                    ? <button className={`rounded-full mb-8 size-12 bg-[#f1f1f1] sticky bottom-8 left-10 hover:bg-[#db4444] [&>svg>path]:hover:stroke-white`} onClick={handleScroll}>
                        <ArrowUp className="rotate-180 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </button>
                    :  <button className={`rounded-full mb-8 size-12 bg-[#f1f1f1] ${offset<1000 ? "invisible" : "sticky"} bottom-8 left-10 hover:bg-[#db4444] [&>svg>path]:hover:stroke-white`} onClick={handleScroll}>
                        <ArrowUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </button>
            }
        </>

    )
}

export default ScrollButton
