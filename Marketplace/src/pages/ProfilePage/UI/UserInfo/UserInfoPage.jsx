import Input from "../../../../shared/UI/Input"
import {Form, FormField, Label, ErrorMessage} from "../../../../shared/UI/Form"
import Button from "../../../../shared/UI/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import userInfoSchema from "./validationShema"
import { useId } from "react"
const UserInfoPage = () => {
	const {
		register,
		handleSubmit,
		setError,
		setFocus,
		formState: { errors },
	} = useForm({
		criteriaMode: 'all',
		resolver: yupResolver(userInfoSchema),
	})
	const nameId = useId()
	const emailId = useId()
	const passId = useId()
	const errorNameId = useId()
	const errorEmailId = useId()
	const currentPasswordErrorId = useId()
	const newPasswordErrorId = useId()
	const confirmPasswordErrorId = useId()
	const handleEditUser = handleSubmit(
		async(data)=>{
			try{
				throw new Error("Wrong password")
			}
			catch(e){
				if(e.message==="Wrong password"){
					setError("currentPassword",{
						type: e.status,
						message: e.message,
					})
					setFocus("currentPassword")
				}
				else{
					setError("root.serverError",{
						type: e.status,
						message: e.message,
					})

				}
			}
		}
	)
	const handlePasswordInputs = (e)=>{
		const label = e.currentTarget.children[passId]
		if(e.target===label){
			const inputList = [
				e.currentTarget.children.currentPassword,
				e.currentTarget.children.password,
				e.currentTarget.children.confirmPassword,
			]
			for (let i = 0; i < inputList.length; i++) {
				if(!inputList[i].value) {
					inputList[i].focus()
					break
				}
				i===inputList.length-1 && inputList[0].focus()
			}
		}
	}
	return (
	<div className="px-20 py-10 shadow-lg bg-white rounded-lg">
		<h1 className="text-xl pb-4">Your Profile</h1>
		<Form className="grid grid-cols-2 gap-x-12 gap-y-6 items-center [&>div]:self-start" onSubmit={handleEditUser}>
			<FormField>
				<Label htmlFor={nameId}>Username</Label>
				<Input id={nameId} aria-errormessage={errorNameId} placeholder="Name" errorMessage={errors.username} {...register("username")}/>
				<ErrorMessage id={errorNameId}>{errors.username?.message}</ErrorMessage>
			</FormField>
			<FormField>
				<Label htmlFor={emailId}>Email</Label>
				<Input id={emailId} aria-errormessage={errorEmailId} placeholder="example@email.com" errorMessage={errors.email} {...register("email")}/>
				<ErrorMessage id={errorEmailId}>{errors.email?.message}</ErrorMessage>
			</FormField>
			<Input placeholder="City, street, house" {...register("address")}/>
			<FormField className="col-span-2"  onClick={handlePasswordInputs}>
				<Label id={passId}>Password Changes</Label>
				<Input aria-labelledby={passId} placeholder="Current Passwod" errorMessage={errors.currentPassword} {...register("currentPassword")} aria-errormessage={currentPasswordErrorId}/>
				<ErrorMessage id={currentPasswordErrorId}>{errors.currentPassword?.message}</ErrorMessage>
				<Input aria-labelledby={passId} placeholder="New Passwod" errorMessage={errors.password} {...register("password")} aria-errormessage={newPasswordErrorId}/>
				<ErrorMessage id={newPasswordErrorId}>{errors.password?.message}</ErrorMessage>
				<Input aria-labelledby={passId} placeholder="Confirm New Passwod" errorMessage={errors.confirmPassword} {...register("confirmPassword")} aria-errormessage={confirmPasswordErrorId}/>
				<ErrorMessage id={confirmPasswordErrorId}>{errors.confirmPassword?.message}</ErrorMessage>
			</FormField>
			<ErrorMessage>{errors.root?.serverError.message}</ErrorMessage>
			<Button className="col-start-2 justify-self-end">Edit</Button>
		</Form>
	</div>
  )
}

export default UserInfoPage
