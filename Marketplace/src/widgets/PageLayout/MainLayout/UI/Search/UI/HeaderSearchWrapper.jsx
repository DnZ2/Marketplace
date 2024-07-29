import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const HeaderSearchWrapper = forwardRef(({children}, ref) => {
	return (
	<div ref={ref} className="flex items-center relative rounded w-60">
		{children}
	</div>
  )
})
HeaderSearchWrapper.propTypes={
	children: PropTypes.node,
}
HeaderSearchWrapper.displayName = "HeaderSearchWrapper";
export default HeaderSearchWrapper