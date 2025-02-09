import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SigninCard() {

    const [signinForm, setSigninForm] = useState({
        email: '',
        password: ''

    })


    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>
                        Sign in to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className='space-y-3'>

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
                            disabled={false}
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