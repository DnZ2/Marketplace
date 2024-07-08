import { NavLink } from "react-router-dom"
import AuthLayout from "../../widgets/Layout/AuthLayout"
import Welcome from "../../assets/welcome.jpeg"
import { useRegistrationMutation } from '../../shared/redux/query/api'
import { useDispatch } from 'react-redux'
import { setUser } from '../../shared/redux/slices/userSlice'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
const RegisterPage = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [registration] = useRegistrationMutation()
	const dispatch = useDispatch()
	const navigate = useNavigate();
	const handleChangeEmail = ({target})=>{
		setEmail(target.value)
	}
	const handleChangePassword = ({target})=>{
		setPassword(target.value)
	}
	const handleSubmit = async (e)=>{
		e.preventDefault()
		if(email && password){
			const userData = await registration({email, password}).unwrap()
			dispatch(setUser(userData))
			setEmail("")
			setPassword("")
			if(localStorage.getItem("roles")==="ADMIN") navigate("/admin")
			else navigate('/')
		}
	}
  return (
	<AuthLayout img={Welcome}>
		<form className="flex flex-col gap-10" action="submit" onSubmit={handleSubmit}>
			<h3 className="text-4xl">Create an account</h3>
			<input className="bg-inherit text-base h-9 border-solid border-0 border-b-[3px] border-[#f0f0f0]" type="text" placeholder="Email" value={email} onChange={handleChangeEmail}/>
			<input className="bg-inherit text-base h-9 border-solid border-0 border-b-[3px] border-[#f0f0f0]" type="text" placeholder="Password" value={password} onChange={handleChangePassword}/>
			<div className="flex flex-col items-center gap-6">
				<button className="h-16 w-full bg-[#db4444] rounded text-[#fafafa]" type="submit">Create Account</button>
				<p className="flex gap-3">Already have account?<NavLink className="border-b-[1px] border-black" to="/login">Log in</NavLink></p>
			</div>
		</form>
	</AuthLayout>
  )
}

export default RegisterPage
