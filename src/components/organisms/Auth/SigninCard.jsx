import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { LucideLoader, TriangleAlert } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function SigninCard({ signinForm, setSigninForm, validationError, onSigninFormSubmit, error, isSuccess, isPending }) {

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>
                        Sign in to access your account
                    </CardDescription>

                    {validationError && (
                        <div className='flex items-center gap-2 bg-destructive/15 text-destructive rounded-md p-3 mt-3'>
                            <TriangleAlert className='size-5' />
                            <p>
                                {validationError.message}
                            </p>
                        </div>
                    )}
                    {error && (
                        <div className='flex items-center gap-2 bg-destructive/15 text-destructive rounded-md p-3 mt-3'>
                            <TriangleAlert className='size-5' />
                            <p>
                                {error.error.explanation}
                            </p>
                        </div>
                    )}

                    {isSuccess && (
                        <div
                            className="flex items-center gap-2 bg-green-100 text-green-500 rounded-md p-3 mt-3"
                        >
                            <LucideLoader className='animate-spin ml-2' />
                            <p>
                                Signin Successful, redirecting you to Home page...
                            </p>
                        </div>
                    )}



                </CardHeader>
                <CardContent>
                    <form className='space-y-3' onSubmit={onSigninFormSubmit}>

                        <Input
                            required
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setSigninForm({ ...signinForm, email: e.target.value })}
                            value={signinForm.email}

                        />

                        <Input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setSigninForm({ ...signinForm, password: e.target.value })}
                            value={signinForm.password}
                            required
                        />

                        <Button
                            type='submit'
                            className='w-full'
                            size='lg'
                            disabled={isPending}
                        >
                            Sign In
                        </Button>

                    </form>
                    <Separator className='my-4' />

                    <p className='text-s text-muted-foreground '>
                        Don't have an account? {' '}
                        <span className='text-blue-500 hover:underline cursor-pointer'>
                            <Link
                                to='/auth/signup'
                            >

                                Signup
                            </Link>
                        </span>
                    </p>
                </CardContent>
            </Card>
        </>
    )
}

export default SigninCard