import Welcome from "../../assets/welcome.jpeg"
import WelcomeBack from "../../assets/welcome-back-1.webp"
import { Outlet, useLocation } from 'react-router-dom';
const AuthLayout = () => {
	let location = useLocation()
  return (
	<div className="min-h-fit relative">
		<img className="w-[60%] h-[80vh] object-cover" src={location.pathname==="/register" ? Welcome : WelcomeBack} alt="welcome" />
		<div className="absolute top-0 left-0 h-full w-full">
			<div className="container flex justify-end items-center h-full"><Outlet /></div>
		</div>
	</div>
  )
}

export default AuthLayout
