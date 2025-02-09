import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

function SignupCard() {
    const [signupForm, setSignupForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })


    return (
        <>
            <Card className="w-full h-full">
                <CardHeader>
                    <CardTitle>Sign Up </CardTitle>
                    <CardDescription>
                        Sign up to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-3" >
                        <Input
                            type="text"
                            placeholder="Username"
                            onchange={(e) => setSignupForm({ ...signupForm, username: e.target.value })}
                            value={signupForm.username}
                            required

                        />
                        <Input
                            required
                            type="email"
                            placeholder="Email"
                            onchange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                            value={signupForm.email}

                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            onchange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                            value={signupForm.password}
                            required

                        />
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            onchange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                            value={signupForm.confirmPassword}
                            required

                        />
                        <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                            disabled={false}
                        >
                            Continue
                        </Button>
                    </form>
                    <Separator className="my-4" />
                    <p className="text-s text-muted-foreground my-4 ">
                        Already have an account? {"  "}
                        <span className="text-sky-600 cursor-pointer hover:underline">

                            Sign in
                        </span>
                    </p>
                </CardContent>
            </Card>
        </>
    )
}

export default SignupCard