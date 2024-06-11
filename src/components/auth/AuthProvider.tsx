import axios from "axios";
import { 
    createContext, 
    useContext, 
    useEffect, 
    useMemo, 
    useState 
} from "react";

const AuthContext = createContext({});


const AuthProvider = ({ children } :any) => {

    const [token, setToken_] = useState(localStorage.getItem("token"));
    const setToken = (newToken :any) => {
        setToken_(newToken);
    };

    console.log(token)

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token',token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
        }
    },[token]);

    const contextValue = useMemo(() => ({
        token,
        setToken,
    }),
    [token]);

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
      );
}

export const useAuth = () :any  => {
    return useContext(AuthContext);
};

export default AuthProvider;