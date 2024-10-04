import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
const Input = forwardRef(function Input(props, ref) {
	const {
		errorMessage,
		className,
		...other
	} = props
  return (
	<input ref={ref} className={`${className} px-4 py-3 bg-[#F5F5F5] rounded outline-1 focus:outline ${errorMessage && "outline-red-400 outline"}`} {...other}/>
  )
})
Input.propTypes={
	className: PropTypes.string,
	errorMessage: PropTypes.string,
}
export const MInput = motion(Input)
export default Input
