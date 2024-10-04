import PropTypes from 'prop-types';
import CardsVariants from './CardsWrappes.styles';

const CardsWrapper = ({children, className, variant, size, styles, ...props}) => {
	CardsWrapper.propTypes={
		children: PropTypes.node,
		className: PropTypes.string,
		variant: PropTypes.string,
		size: PropTypes.string,
		styles: PropTypes.string,
	}
	return (
	<div className={CardsVariants({ variant, size, styles, className })} {...props}>
		{children}
	</div>
  )
}

export default CardsWrapper
