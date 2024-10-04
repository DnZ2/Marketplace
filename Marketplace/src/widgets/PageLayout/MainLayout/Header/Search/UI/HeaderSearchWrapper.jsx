import PropTypes from 'prop-types';
import { forwardRef } from 'react';
const HeaderSearchWrapper = forwardRef(({children, ...props}, ref) => {
	return (
	<div ref={ref} className="flex items-center relative rounded max-w-60 min-w-10" {...props}>
		{children}
	</div>
  )
})
HeaderSearchWrapper.propTypes={
	children: PropTypes.node,
}
HeaderSearchWrapper.displayName = "HeaderSearchWrapper";
export default HeaderSearchWrapper