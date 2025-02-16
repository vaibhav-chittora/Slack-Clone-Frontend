import SigninContainer from "@/components/organisms/Auth/SigninContainer"
import SignupContainer from "@/components/organisms/Auth/SignupContainer"
import Auth from "@/pages/Auth/Auth"
import Notfound from "@/pages/Notfound/Notfound"
import { Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/auth/signup" element={<Auth ><SignupContainer /></Auth>} />
            <Route path="/auth/signin" element={<Auth ><SigninContainer /></Auth>} />
            <Route path='/home' element={<Auth> <h1>Home</h1> </Auth>} />

            //not found page
            <Route path='*' element={<Notfound />} />
        </Routes>
    )
}