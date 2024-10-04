import { NavLink, useNavigate } from "react-router-dom"
import { useLoginMutation } from '../../shared/redux/query/api'
import { useDispatch } from "react-redux"
import { setUser } from "../../shared/redux/slices/userSlice"
import useInput from "../../shared/hooks/useInput"
import { useState } from "react"
const LoginPage = () => {
	const email = useInput("")
	const password = useInput("")
	const [requestError, setRequestError] = useState("")
	const [login] = useLoginMutation()
	const navigate = useNavigate();
	const dispatch = useDispatch()

	const handleSubmit = async (e)=>{
		try{
			e.preventDefault()
			if(email.props.value && password.props.value){
				const userData = await login({email:email.props.value, password:password.props.value}).unwrap()
				dispatch(setUser(userData))
				email.reset()
				password.reset()
				setRequestError("")
				navigate('/')
			}
		}
		catch(e){
			setRequestError(e.data.message)
		}
	}
  return (
		<form action="submit" onSubmit={handleSubmit} className="flex flex-col gap-12">
			<div>
				<h1 className="text-4xl pb-6">Log in to Exclusive</h1>
				<span>Enter your details below</span>
			</div>
			<div className="flex flex-col gap-10">
				<input className="bg-inherit text-base p-2 pl-0 border-solid border-0 border-b-[3px] border-[#f0f0f0]" type="text" placeholder="Email" {...email.props} />
				<input className="bg-inherit text-base p-2 pl-0 border-solid border-0 border-b-[3px] border-[#f0f0f0]" type="text" placeholder="Password" {...password.props} />
				<span className="text-red-400 h-3">{requestError}</span>
				<div className="flex justify-between items-center">
					<button className="w-36 h-16 text-base bg-[#db4444] text-[#fafafa] rounded" type="submit">Log in</button>
					<NavLink className="text-base text-[#db4444]" to="/register">Create account</NavLink>
				</div>
			</div>
		</form>
  )
}

export default LoginPage
