import { Navigate, Outlet } from "react-router-dom"
import Cookies from "js-cookie";

export const ProtectedRoute = () => {

    const getAccessToken = () => {
        return Cookies.get('token');
    }
      
      // Function to check if the user is authenticated
    const isAuthenticated = () => {
        const token = getAccessToken();
        return token ? true : false;
    }
    if( ! isAuthenticated()) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}