import PropTypes from 'prop-types';
const Input = (props)=> {
	const {
		register,
		errorMessage,
		label,
		className,
		type="text",
		...otherProps
	} = props
  return (
	<div className='flex flex-col gap-2'>
		{label && <label className='w-fit' htmlFor={label}>{label}</label>}
		<input type={type} className={`${className} px-4 py-3 bg-[#F5F5F5] rounded outline-1 focus:outline ${errorMessage && "outline-red-400 outline"}`}  {...register} {...otherProps} id={label}/>
		{errorMessage && <span className='w-fit text-red-400'>{errorMessage}</span>}
	</div>
  )
}
Input.propTypes={
	className: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string,
	errorMessage: PropTypes.string,
	register: PropTypes.object
}
export default Input
