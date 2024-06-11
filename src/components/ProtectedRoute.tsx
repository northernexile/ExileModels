import { useAuth } from "./auth/AuthProvider"
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const {token} = useAuth();

    console.log('token is '+token)

    return (!token)
        ? <Navigate to='/login'  />
        : <Outlet />
}