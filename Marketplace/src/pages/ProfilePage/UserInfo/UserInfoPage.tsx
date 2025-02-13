import Input from "shared/UI/Input/Input"
import {Form, FormField, Label, ErrorMessage} from "shared/UI/Form"
import Button from "shared/UI/Button/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import userInfoSchema from "./userValidationSchema"
import { useEffect, useId, useState } from "react"
import { useEditUserMutation, useGetUserQuery } from "shared/redux/query/endpoints/usersApi"
import { SerializedError } from "@reduxjs/toolkit"
import useEvent from "react-use-event-hook"
export const UserInfoPage = () => {
    const {data:user, isLoading} = useGetUserQuery()
    const [editUser, { message: serverError}] = useEditUserMutation<SerializedError>()

    const {
        register,
        handleSubmit,
        reset,
        resetField,
        formState: { errors, dirtyFields },
    } = useForm({
        mode: "all",
        defaultValues: {...user},
        resolver: yupResolver(userInfoSchema),
    })

    useEffect(() => {
        !isLoading && user && reset({...user});
    }, [isLoading]);

    const [editStatus, setEditStatus] = useState(false)
    const userFormId = useId()

    const emailProps = register("email")
    const usernameProps = register("username")
    const passwordProps = register("password")
    const currentPasswordProps = register("currentPassword")
    const confirmPasswordProps = register("confirmPassword")

    const handleEditUser = handleSubmit((data)=>{
        editUser(data).unwrap().then(()=>{
            setEditStatus(false)
            resetField("password")
            resetField("currentPassword")
            resetField("confirmPassword")
        })
    })

    const editToggleButton = useEvent(()=>{
        setEditStatus(prev=>{
            if(prev) reset()
            return !prev
        })
    })

    return (
        <div className="px-20 py-10 shadow-lg bg-white rounded-lg">
            <h1 className="text-xl pb-4">Your Profile</h1>
            <Form className="grid grid-cols-2 gap-x-12 gap-y-6 items-center [&>div]:self-start" onSubmit={handleEditUser}>
                <FormField>
                    <Label htmlFor={`${userFormId}-name`}>Username</Label>
                    <Input 
                        placeholder="Name"
                        {...usernameProps} 
                        invalid={!!errors.username?.message}
                        touched={dirtyFields.username || !!errors.username}
                        onInput={usernameProps.onChange}
                        disabled={!editStatus}
                        id={`${userFormId}-name`}
                        aria-errormessage={`${userFormId}-name-error`}/>
                    <ErrorMessage id={`${userFormId}-name-error`}>{errors.username?.message}</ErrorMessage>
                </FormField>
                <FormField>
                    <Label htmlFor={`${userFormId}-email`}>Email</Label>
                    <Input
                        placeholder="example@email.com" 
                        {...emailProps} 
                        invalid={!!errors.email?.message}
                        touched={dirtyFields.email || !!errors.email} 
                        disabled={!editStatus} 
                        id={`${userFormId}-email`} 
                        aria-errormessage={`${userFormId}-email-error`}/>
                    <ErrorMessage id={`${userFormId}-email-error`}>{errors.email?.message}</ErrorMessage>
                </FormField>
                <FormField>
                    <Label htmlFor={`${userFormId}-address`}>Address</Label>
                    <Input placeholder="City, street, house" {...register("address")} id={`${userFormId}-address`}/>
                </FormField>
                <FormField className="col-span-2">
                    <Label id={`${userFormId}-password`}>Password Changes</Label>
                    <Input
                        placeholder="Current Passwod"
                        {...currentPasswordProps}
                        invalid={!!errors.currentPassword?.message} 
                        touched={dirtyFields.currentPassword || !!errors.currentPassword} 
                        disabled={!editStatus} 
                        aria-errormessage={`${userFormId}-currentPassword-error`} 
                        aria-labelledby={`${userFormId}-password`}/>
                    <ErrorMessage id={`${userFormId}-currentPassword-error`}>{errors.currentPassword?.message}</ErrorMessage>
                    <Input
                        placeholder="New Passwod"
                        {...passwordProps} 
                        invalid={!!errors.password?.message} 
                        touched={dirtyFields.password || !!errors.password} 
                        disabled={!editStatus} 
                        aria-errormessage={`${userFormId}-new-password-error`} 
                        aria-labelledby={`${userFormId}-password`}/>
                    <ErrorMessage id={`${userFormId}-new-password-error`}>{errors.password?.message}</ErrorMessage>
                    <Input 
                        placeholder="Confirm New Passwod" 
                        {...confirmPasswordProps} 
                        invalid={!!errors.confirmPassword?.message}
                        touched={dirtyFields.confirmPassword || !!errors.confirmPassword} 
                        disabled={!editStatus} 
                        aria-errormessage={`${userFormId}-confirm-password-error`} 
                        aria-labelledby={`${userFormId}-password`} />
                    <ErrorMessage id={`${userFormId}-confirm-password-error`}>{errors.confirmPassword?.message}</ErrorMessage>
                </FormField>
                <ErrorMessage>{serverError}</ErrorMessage>
                <FormField row className="col-start-2 gap-3 justify-self-end">
                    {editStatus && <Button type="submit" variant="secondary">Confirm</Button>}
                    <Button onClick={editToggleButton}>{!editStatus ? "Edit" : "Cancel"}</Button>
                </FormField>
            </Form>
        </div>
    )
}

