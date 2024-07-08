import { useScrollButton } from "../hooks/useScrollButtonHook"
import ArrowUp from "../../assets/arrowUp.svg?react"
import { useEffect } from "react";

const ScrollButton = () => {
	const {offset, savedPosition, handleScroll, setSavedPosition} = useScrollButton(0);

	useEffect(()=>{
		if(offset>savedPosition-500){
			setSavedPosition(0)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [offset])

  return (
	<>
		<button className={`rounded-full size-12 flex justify-center items-center bg-[#f1f1f1] mb-8 ${offset<1000? "hidden" : "sticky"} bottom-8 left-10 hover:bg-[#db4444] [&>svg>path]:hover:stroke-white`} onClick={handleScroll}>
			<ArrowUp />
		</button>
		{
			savedPosition>0
			? <button className={`rounded-full size-12 flex justify-center items-center bg-[#f1f1f1] mb-8 sticky bottom-8 left-10 hover:bg-[#db4444] [&>svg>path]:hover:stroke-white`} onClick={handleScroll}>
				<ArrowUp className="rotate-180" />
			</button>
			: null
		}
	</>

  )
}

export default ScrollButton
