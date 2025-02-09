import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { LucideLoader, LucideLoader2, TriangleAlert } from "lucide-react"
import { Link } from "react-router-dom"

function SignupCard({
    error,
    isPending,
    isSuccess,
    signupForm,
    setSignupForm,
    validationError,
    onSignupFormSubmit
}) {



    return (
        <>
            <Card className="w-full h-full">
                <CardHeader>
                    <CardTitle>Sign Up </CardTitle>
                    <CardDescription>
                        Sign up to create your account
                    </CardDescription>

                    {validationError && (
                        <div
                            className="flex items-center gap-2 bg-destructive/15 text-destructive rounded-md p-3 mt-3"
                        >
                            <TriangleAlert className='size-5' />
                            <p>
                                {validationError.message}
                            </p>
                        </div>
                    )}

                    {error && (
                        <div
                            className="flex items-center gap-2 bg-destructive/15 text-destructive rounded-md p-3 mt-3"
                        >
                            <TriangleAlert className='size-5' />
                            <p>
                                {error.message}
                            </p>
                        </div>
                    )}
                    {isSuccess && (
                        <div
                            className="flex items-center gap-2 bg-green-100 text-green-500 rounded-md p-3 mt-3"
                        >
                            <LucideLoader className='animate-spin ml-2' />
                            <p>
                                Signup Successful, redirecting you to login page...
                            </p>
                        </div>
                    )}



                </CardHeader>
                <CardContent>
                    <form className="space-y-3" onSubmit={onSignupFormSubmit} >
                        <Input
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setSignupForm({ ...signupForm, username: e.target.value })}
                            value={signupForm.username}
                            required
                            disabled={isPending}

                        />
                        <Input
                            required
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                            value={signupForm.email}
                            disabled={isPending}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                            value={signupForm.password}
                            disabled={isPending}
                            required

                        />
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                            value={signupForm.confirmPassword}
                            required
                            disabled={isPending}

                        />
                        <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                            disabled={isPending}

                        >
                            Continue
                        </Button>
                    </form>
                    <Separator className="my-4" />
                    <p className="text-s text-muted-foreground my-4 ">
                        Already have an account? {"  "}
                        <span className="text-sky-600 cursor-pointer hover:underline">
                            <Link
                                to='/auth/signin'
                            >
                                Sign in
                            </Link>
                        </span>
                    </p>
                </CardContent>
            </Card>
        </>
    )
}

export default SignupCard