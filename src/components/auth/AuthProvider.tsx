import Cookies from 'js-cookie';

const AuthProvider = {
    isAuthenticated: () => {
        return  Cookies.get('token')
            ? Promise.resolve()
            : Promise.reject();
    }
}

export default AuthProvider;