import PropTypes from 'prop-types';

const CardsWrapper = ({children, className}) => {
	CardsWrapper.propTypes={
		children: PropTypes.node,
		className: PropTypes.string,
	}
	return (
	<div className={`${className}`}>
		{children}
	</div>
  )
}

export default CardsWrapper
