import { NavLink, useNavigate } from "react-router-dom"
import AuthLayout from "../../widgets/Layout/AuthLayout"
import welcomeBack from "../../assets/welcome-back-1.webp"
import { useLoginMutation } from '../../shared/redux/query/api'
import { useDispatch } from 'react-redux'
import { setUser } from '../../shared/redux/slices/userSlice'
import { useState } from 'react'
"../../"
const LoginPage = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [login] = useLoginMutation()
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const handleChangeEmail = ({target})=>{
		setEmail(target.value)
	}
	const handleChangePassword = ({target})=>{
		setPassword(target.value)
	}
	const handleSubmit = async (e)=>{
		try{
			e.preventDefault()
			if(email && password){
				const userData = await login({email, password}).unwrap()
				dispatch(setUser(userData))
				setEmail("")
				setPassword("")
				if(localStorage.getItem("roles")==="ADMIN") navigate("/admin")
				else navigate('/')
			}
		}
		catch(e){
			console.log(e)
		}
	}
  return (
	<AuthLayout img={welcomeBack}>
		<form className="flex flex-col gap-10" action="submit" onSubmit={handleSubmit}>
			<h3 className="text-4xl">Log in to Exclusive</h3>
			<input className="bg-inherit text-base h-9 border-solid border-0 border-b-[3px] border-[#f0f0f0]" type="text" placeholder="Email or Phone number" value={email} onChange={handleChangeEmail}/>
			<input className="bg-inherit text-base h-9 border-solid border-0 border-b-[3px] border-[#f0f0f0]" type="text" placeholder="Password" value={password} onChange={handleChangePassword}/>
			<div className="flex justify-between items-center">
				<button className="w-36 h-16 text-base bg-[#db4444] text-[#fafafa] rounded" type="submit">Log in</button>
				<NavLink className="text-base text-[#db4444]" to="/register">Create account</NavLink>
			</div>
		</form>
	</AuthLayout>
  )
}

export default LoginPage
