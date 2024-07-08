import PropTypes from 'prop-types';
const AuthLayout = ({img, children}) => {
	AuthLayout.propTypes={
		img: PropTypes.string,
		children: PropTypes.node,
	}
  return (
	<div className="min-h-fit relative">
		<img className="w-[60%] h-[80vh] object-cover" src={img} alt="welcome back" />
		<div className="absolute top-0 left-0 h-full w-full">
			<div className="container flex justify-end items-center h-full">{children}</div>
		</div>
	</div>
  )
}

export default AuthLayout
