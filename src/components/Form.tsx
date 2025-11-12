import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { sendEmail } from "../api/EmailAPI"
import { useState } from "react"

type FormType = {
    email: string
}

export default function Form() {

    const [message, setMessage] = useState('')

    const initialValues : FormType = {
        email: ''
    }

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({defaultValues: initialValues})

    const {mutate} = useMutation({
        mutationFn: sendEmail,
        onSuccess: (data) => setMessage(data),
        onError: (error) => setMessage(error.message)
    })

    const handleCreateName = (formData : {email : string}) => mutate(formData)
    
  return (
    <form
        onSubmit={handleSubmit(handleCreateName)}
        noValidate
    >
        <div>
            <label htmlFor="email">Email</label>

            <input 
                type="email" 
                placeholder="Email"    
                id="email"
                {...register('email', {
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "E-mail no válido"
                    }
                })}
            />

            {errors.email && <p>{errors.email.message}</p>}
        </div>

        <p>{message}</p>

        <input 
            type="submit" 
            value="Confirmar" />
    </form>
  )
}
