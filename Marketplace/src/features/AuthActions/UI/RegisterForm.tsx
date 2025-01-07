import { NavLink, useNavigate } from "react-router-dom"
import { useRegistrationMutation } from 'shared/redux/query/endpoints/authApi'
import Input from "shared/UI/Input/Input"
import registrationValidationSchema from "../validation/registrationValidationSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { ErrorMessage, Form, FormField } from "shared/UI/Form"
import { SerializedError } from "@reduxjs/toolkit"
import Button from "shared/UI/Button/Button"

export const RegisterForm = () => {
    const [registration, {message: serverError}] = useRegistrationMutation<SerializedError>()
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registrationValidationSchema)
    });

    const onLogin = handleSubmit((data, event) => {
        event?.preventDefault()
        registration({...data}).unwrap().then(()=>navigate("/profile"))
    })
    
    return (
        <Form action="submit" onSubmit={onLogin} className="flex flex-col gap-8">
            <h3 className="text-4xl">Create an account</h3>
            <FormField className="gap-6">
                <Input invalid={!!errors.email?.message} {...register("email")} placeholder="Email" />
                {!!errors.email?.message && <ErrorMessage className="h-3">{errors.email?.message}</ErrorMessage>}
                <Input invalid={!!errors.password?.message} {...register("password")} placeholder="Password"/>
                {!!errors.password?.message && <ErrorMessage className="h-3">{errors.password?.message}</ErrorMessage>}
                <Input invalid={!!errors.password?.message} {...register("confirmPassword")} placeholder="Confirm password"/>
                {!!errors.password?.message && <ErrorMessage className="h-3">{errors.password?.message}</ErrorMessage>}
                {serverError && <ErrorMessage className="h-3">{serverError}</ErrorMessage>}
                <FormField row className="items-center gap-6">
                    <Button variant="primary" type="submit">Create Account</Button>
                    <p className="flex gap-3">Already have account?<NavLink className="border-b-[1px] border-black" to="/login">Log in</NavLink></p>
                </FormField>
            </FormField>
        </Form>
    )
}




