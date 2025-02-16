import { useAuth } from "@/hooks/context/useAuth";
import { LucideLoader2 } from "lucide-react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const { auth } = useAuth();



    if (auth.isLoading) {
        return <div className="h-screen flex items-center justify-center"><LucideLoader2 className="h-10 w-10 animate-spin" /></div>
    }

    if (!auth.user || !auth.token) {
        return <Navigate to="/auth/signin" />
    }

    return children



}
