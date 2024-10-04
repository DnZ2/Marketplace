import { NavLink } from "react-router-dom"
import { useRegistrationMutation } from '../../shared/redux/query/api'
import { setUser } from "../../shared/redux/slices/userSlice"
import { useDispatch } from "react-redux"
import useInput from "../../shared/hooks/useInput"
const RegisterPage = () => {
	const email = useInput("")
	const password= useInput("")
	const repeatPassword= useInput("")
	const [registration] = useRegistrationMutation()
	const dispatch = useDispatch()

	const handleSubmit = async (e)=>{
		e.preventDefault()
		if(email && password){
			const userData = await registration({email, password}).unwrap()
			dispatch(setUser(userData))
			email.reset()
			password.reset()
			repeatPassword.reset()
		}
	}
  return (
	<form className="flex flex-col gap-10" action="submit" onSubmit={handleSubmit}>
		<h3 className="text-4xl">Create an account</h3>
		<input className="bg-inherit text-base h-9 border-solid border-0 border-b-[3px] border-[#f0f0f0]" type="text" placeholder="Email" {...email.props}/>
		<input className="bg-inherit text-base h-9 border-solid border-0 border-b-[3px] border-[#f0f0f0]" type="text" placeholder="Password" {...password.props}/>
		<input className="bg-inherit text-base h-9 border-solid border-0 border-b-[3px] border-[#f0f0f0]" type="text" placeholder="Repeat password" {...repeatPassword.props}/>
		<div className="flex flex-col items-center gap-6">
			<button className="h-16 w-full bg-[#db4444] rounded text-[#fafafa]" type="submit">Create Account</button>
			<p className="flex gap-3">Already have account?<NavLink className="border-b-[1px] border-black" to="/login">Log in</NavLink></p>
		</div>
	</form>
  )
}

export default RegisterPage
