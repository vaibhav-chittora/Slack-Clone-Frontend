import React, { useEffect, useState } from 'react'
import SigninCard from './SigninCard'
import { useSignIn } from '@/hooks/apis/auth/useSignIn'
import { useNavigate } from 'react-router-dom'

function SigninContainer() {
    const navigate = useNavigate()
    const [signinForm, setSigninForm] = useState({
        email: '',
        password: ''

    })

    const [validationError, setValidationError] = useState(null)

    const { isPending, isSuccess, error, signInMutation } = useSignIn()



    const onSigninFormSubmit = async (e) => {
        e.preventDefault()
        console.log("Signin Form Submitted", signinForm);

        if (!signinForm.email || !signinForm.password) {
            setValidationError("Email and password are required")
            setValidationError("message:Please enter email and password")
            return
        }
        setValidationError(null)

        // call api to signin
        await signInMutation({
            email: signinForm.email,
            password: signinForm.password
        })

    }
    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                navigate('/home')
            }, 3000);
        }
    }, [isSuccess, navigate])

    return (
        <>
            <SigninCard
                signinForm={signinForm}
                setSigninForm={setSigninForm}
                onSigninFormSubmit={onSigninFormSubmit}
                validationError={validationError}
                isPending={isPending}
                isSuccess={isSuccess}
                error={error}

            />
        </>
    )
}

export default SigninContainer