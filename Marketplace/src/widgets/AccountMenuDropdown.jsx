import Dropdown from "../shared/UI/Dropdown"
import Profile from "../assets/profile.svg?react"
import Orders from "../assets/icon-mallbag.svg?react"
import Reviews from "../assets/Icon-Reviews.svg?react"
import Logout from "../assets/Icon-logout.svg?react"
import { useLogoutMutation } from "../shared/redux/query/api"
import { useDispatch } from "react-redux"
import { setInitial } from "../shared/redux/slices/userSlice"
import { useNavigate } from "react-router-dom"
const AccountMenuDropdown = () => {
	const [logout] = useLogoutMutation()
	const dispatch = useDispatch()
	const handleLogout = async()=>{
		await logout().unwrap()
		dispatch(setInitial())
	}
	const navigate = useNavigate()
	const handleRedirect = ()=>{
		!localStorage.getItem("token") ? navigate("/login") : navigate("/profile")
	}
  return (
	<Dropdown>
		<li className="p-1 relative rounded-full hover:bg-[#db4444] hover:cursor-pointer [&>div>svg]:hover:stroke-[#f7f7fc]">
			<div onClick={handleRedirect}>
				<Profile className="w-[30px] h-[30px] fill-none stroke-black stroke-[1.5]" />
			</div>
			<div className="rounded-full h-2 w-2 absolute right-1 top-1 bg-[#DB4444]"></div>
		</li>

		<ul className="flex flex-col items-start p-4 gap-4 bg-black bg-opacity-30 backdrop-blur-md w-[220px]">
			<li className="flex items-center justify-between gap-4">
				<Profile className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.5]"/>
				<span className="text-white text-sm">Manage My Account</span>
			</li>
			<li className="flex items-center justify-between gap-4">
				<Orders className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.5]"/>
				<span className="text-white text-sm">My Orders</span>
			</li>
			<li className="flex items-center justify-between gap-4">
				<Reviews className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.5]"/>
				<span className="text-white text-sm">My Reviews</span>
			</li>
			<li className="flex items-center justify-between gap-4" onClick={handleLogout}>
				<Logout className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.5]"/>
				<span className="text-white text-sm">Logout</span>
			</li>
		</ul>
	</Dropdown>
  )
}

export default AccountMenuDropdown
