import { NavLink } from "react-router-dom"
import Profile from "../../../../../../../assets/profile.svg?react"
import { memo } from "react"
const AccountDropdownTrigger = memo(function AccountDropdownTrigger() {
  return (
	<div className="p-1 relative rounded-full hover:bg-[#db4444] hover:cursor-pointer [&>a>svg]:hover:stroke-[#f7f7fc]">
		<NavLink to="/profile">
			<Profile className="w-[30px] h-[30px] fill-none stroke-black stroke-[1.5]" />
		</NavLink>
		<div className="rounded-full h-2 w-2 absolute right-1 top-1 bg-[#DB4444]"></div>
	</div>
  )
})

export default AccountDropdownTrigger
