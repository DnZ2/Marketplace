import {MInput} from "../../../../../../shared/UI/Input"
import Search from "../../../../../../assets/search.svg?react"
import PropTypes from 'prop-types';
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
const HeaderSearchTrigger = ({isInputOpen, handleOpenInput, props})=> {
	const ref = useRef(null)
	return (
	<AnimatePresence initial={false}>
		<motion.button
		onFocus={handleOpenInput} className="absolute rounded-full bg-[#F5F5F5] size-10 cursor-pointer flex items-center justify-center">
			<Search/>
		</motion.button>
		{isInputOpen &&<MInput
		initial={{
			width: "0px",
			borderRadius: "50%"
		}

		}
		animate={{
			width: "240px",
			borderRadius: "10px"
		}}
		exit={
		{
			width: "0px",
			borderRadius: "50%",
			paddingRight: "0px"
		}
		}
		transition={{duration: 0.5}}
		key="search" name="search" ref={ref} className="text-xs pl-10" placeholder="What are you looking for?" {...props}/>}
	</AnimatePresence>
  )
}
HeaderSearchTrigger.propTypes={
	props: PropTypes.object,
	isInputOpen: PropTypes.bool,
	handleOpenInput: PropTypes.func,
}
export default HeaderSearchTrigger
