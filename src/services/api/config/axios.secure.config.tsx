import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get('token')

export const apiSecure = axios.create({
    withCredentials:true,
    baseURL:'https://localhost:3000',
    headers: { Authorization: `Bearer ${token}` }
});

const errorHandler = (error:any) => {
    const statusCode = error.response?.status
    if (statusCode && statusCode !== 401) {
        console.error(error)
    }

    return Promise.reject(error)
}

apiSecure.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})