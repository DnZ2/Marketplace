import { useCallback } from "react"
import Dropdown from "../../../../../../shared/UI/Dropdown"
import { useLogoutMutation } from "../../../../../../shared/redux/query/api"
import AccountDropdownContent from "./UI/AccountDropdownContent"
import AccountDropdownTrigger from "./UI/AccountDropdownTrigger"

const AccountMenuDropdown = () => {
	const [logout] = useLogoutMutation()
	const handleLogout = useCallback(async()=>{
		await logout().unwrap()
		localStorage.removeItem("token")
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
  return (
	<Dropdown>
		<AccountDropdownTrigger/>
		<AccountDropdownContent logout={handleLogout}/>
	</Dropdown>
  )
}

export default AccountMenuDropdown
