import Profile from "../../../../../../../assets/profile.svg?react"
import Orders from "../../../../../../../assets/icon-mallbag.svg?react"
import Reviews from "../../../../../../../assets/Icon-Reviews.svg?react"
import Logout from "../../../../../../../assets/Icon-logout.svg?react"
import { memo } from "react"
import PropTypes from 'prop-types';

const AccountDropdownContent = memo(function AccountDropdownContent({logout}) {
	return (
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
		<li className="flex items-center justify-between gap-4" onClick={logout}>
			<Logout className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.5]"/>
			<span className="text-white text-sm">Logout</span>
		</li>
	</ul>
  )
})
AccountDropdownContent.propTypes={
	logout: PropTypes.func,
}
export default AccountDropdownContent
