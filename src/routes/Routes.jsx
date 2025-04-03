import { ProtectedRoute } from "@/components/molecules/ProtectedRoute/ProtectedRoute"
import SigninContainer from "@/components/organisms/Auth/SigninContainer"
import SignupContainer from "@/components/organisms/Auth/SignupContainer"
import Auth from "@/pages/Auth/Auth"
import Home from "@/pages/Home/Home"
import Notfound from "@/pages/Notfound/Notfound"
import { JoinPage } from "@/pages/Workspace/JoinPage"
import { WorkspaceLayout } from "@/pages/Workspace/Layout"
import { Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/auth/signup" element={<Auth ><SignupContainer /></Auth>} />
            <Route path="/auth/signin" element={<Auth ><SigninContainer /></Auth>} />
            <Route path='/home' element={<ProtectedRoute> <Auth> <Home /> </Auth></ProtectedRoute>} />
            <Route
                path='/workspaces/:workspaceId'
                element={<ProtectedRoute>
                    <Auth>
                        <WorkspaceLayout />
                    </Auth>
                </ProtectedRoute>}
            />
            <Route path='workspaces/:workspaceId/channels/:channelId'
                element={
                    <ProtectedRoute>
                        <Auth>
                            Channel
                        </Auth>
                    </ProtectedRoute>
                }
            />

            <Route path="/workspaces/join/:workspaceId" element={<JoinPage />} />


            //not found page
            <Route path='*' element={<Notfound />} />
        </Routes>
    )
}