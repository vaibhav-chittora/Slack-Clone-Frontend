import { useAuth } from "@/hooks/context/useAuth"
import { createContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: null,
        isLoading: true
    })

    useEffect(() => {
        const user = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        if (user && token) {
            console.log(user, token)
            setAuth({
                user: JSON.parse(user),
                token: token,
                isLoading: false
            })
        } else {
            setAuth({
                user: null,
                token: null,
                isLoading: false
            })
        }
    }, [])


    async function Logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token')
        setAuth({
            user: null,
            token: null,
            isLoading: false
        })
    }


    return (
        <>
            <AuthContext.Provider value={{ auth, setAuth, Logout }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthContext;