import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({isAuthenticated} :any) => {
    if( ! isAuthenticated) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}