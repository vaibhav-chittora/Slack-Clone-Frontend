import { useEffect, useState } from "react"
import SignupCard from "./SignupCard"
import { useSignUp } from "@/hooks/apis/auth/useSignUp"
import { useNavigate } from "react-router-dom"
function SignupContainer() {
    const navigate = useNavigate()
    const [signupForm, setSignupForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [validationError, setValidationError] = useState(null)
    const { isPending, isSuccess, error, signUpMutation } = useSignUp()

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                navigate('/auth/signin')
            }, 3000);
        }
    }, [isSuccess, navigate])


    async function onSignupFormSubmit(e) {
        e.preventDefault()
        console.log("Signup Form Submitted", signupForm);

        if (!signupForm.username || !signupForm.email || !signupForm.password || !signupForm.confirmPassword) {
            // alert("All fields are required")
            setValidationError({ message: "All fields are required" })

            return
        }
        if (signupForm.password !== signupForm.confirmPassword) {
            // alert("Passwords do not match")
            setValidationError({
                message: "Passwords do not match",
            })
            return
        }

        // call api to signup
        await signUpMutation({
            username: signupForm.username,
            email: signupForm.email,
            password: signupForm.password,
            confirmPassword: signupForm.confirmPassword,
        })


    }

    return (
        <>
            <SignupCard
                error={error}
                isPending={isPending}
                isSuccess={isSuccess}
                signupForm={signupForm}
                setSignupForm={setSignupForm}
                validationError={validationError}
                onSignupFormSubmit={onSignupFormSubmit}
            />
        </>
    )
}

export default SignupContainer