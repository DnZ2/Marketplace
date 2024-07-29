import PropTypes from 'prop-types';

const Sale = ({bg="bg-[#DB4444]", children}) => {
	Sale.propTypes={
		children: PropTypes.node,
		bg: PropTypes.string,
	}
  return (
	<div className={`${bg} w-14 rounded-md h-7 text-xs px-3 py-1 flex justify-center items-center text-[#F5F5F5]`}>
		{children}
	</div>
  )
}

export default Sale
