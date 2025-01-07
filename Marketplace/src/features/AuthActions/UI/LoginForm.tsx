import { NavLink, useNavigate } from "react-router-dom"
import { useLoginMutation } from 'shared/redux/query/endpoints/authApi'
import Input from "shared/UI/Input/Input"
import loginValidationSchema from "../validation/loginValidationSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { ErrorMessage, Form, FormField } from "shared/UI/Form"
import { SerializedError } from "@reduxjs/toolkit"
import Button from "shared/UI/Button/Button"

export const LoginForm = () => {
    const [login, {message: serverError}] = useLoginMutation<SerializedError>()
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginValidationSchema)
    });

    const onLogin = handleSubmit((data, event) => {
        event?.preventDefault()
        login({...data}).unwrap().then(()=>{
            navigate("/profile")
        })
    })
    
    return (
        <Form action="submit" onSubmit={onLogin} className="flex flex-col gap-8">
            <div>
                <h1 className="text-4xl pb-6">Log in to Exclusive</h1>
                <span>Enter your details below</span>
            </div>
            <FormField className="gap-6">
                <Input invalid={!!errors.email?.message} {...register("email")} placeholder="Email" />
                {!!errors.email?.message && <ErrorMessage className="h-3">{errors.email?.message}</ErrorMessage>}
                <Input invalid={!!errors.password?.message} {...register("password")} placeholder="Password"/>
                {!!errors.password?.message && <ErrorMessage className="h-3">{errors.password?.message}</ErrorMessage>}
                {serverError && <ErrorMessage className="h-3">{serverError}</ErrorMessage>}
                <FormField row className="items-center justify-between">
                    <Button variant="primary" type="submit">Log in</Button>
                    <NavLink className="text-base text-[#db4444]" to="/register">Create account</NavLink>
                </FormField>
            </FormField>
        </Form>
    )
}


