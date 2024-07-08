import PropTypes from 'prop-types';

const Sale = ({bg="#DB4444", children}) => {
	Sale.propTypes={
		children: PropTypes.string,
		bg: PropTypes.string,
	}
  return (
	<div className="w-14 rounded-md h-7 text-xs px-3 py-1 flex justify-center items-center text-[#F5F5F5]" style={{backgroundColor: bg}}>
		{children}
	</div>
  )
}

export default Sale
