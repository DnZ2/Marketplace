import Input from "../../../../shared/UI/Input"
import Button from "../../../../shared/UI/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import userInfoSchema from "./validationShema"
const UserInfoPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(userInfoSchema),
		defaultValues: {
			username: "",
			email: ""
		}
	})
	const handleEditUser = handleSubmit((data)=>console.log(data))
	return (
	<div className="px-20 py-10 shadow-lg bg-white rounded-lg">
		<h1 className="text-xl pb-4">Your Profile</h1>
		<form className="grid grid-cols-2 gap-x-12 gap-y-6 items-center [&>div]:self-start" onSubmit={handleEditUser}>
			<Input label="Username" placeholder="Alex" errorMessage={errors.username?.message} register={register("username")}/>
			<Input label="Email" placeholder="example@email.com" errorMessage={errors.email?.message} register={register("email")}/>
			<Input label="Address" placeholder="City, street, house" register={register("address")}/>
			<div className="col-start-1 col-span-2 flex flex-col gap-4 [&>input]:flex-grow">
				<Input label="Password Changes" placeholder="Current Passwod"/>
				<Input placeholder="New Passwod" errorMessage={errors.password?.message} register={register("password")}/>
				<Input placeholder="Confirm New Passwod" errorMessage={errors.confirmPassword?.message} register={register("confirmPassword")}/>
			</div>
			<Button type="submit" className="col-start-2 justify-self-end">Edit</Button>
		</form>
	</div>
  )
}

export default UserInfoPage
