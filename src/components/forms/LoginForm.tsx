import { Button, Grid, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LoginApi } from '../../services/api/auth/login.api';
import axios from "axios";


const LoginForm = () => {

    const [token, setToken_] = useState(localStorage.getItem("token"));
    const setToken = (newToken :any) => {
        setToken_(newToken);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token',token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
        }
    },[token]);

    const loginApi = LoginApi;

    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const handleSubmit = (event:any) => {
        event.preventDefault()
        console.log(formData)
        loginApi.login(formData,true).then((response)=>{
            const tokenResponse = response.data?.access_token;
            const userData = JSON.stringify(response.data?.user);

            if( tokenResponse ) {
                setToken(tokenResponse)
                console.log(token)
            }

            if(userData) {
                console.log(userData)
            }
        }).catch((error)=>{
            console.error(error)
        })
    }

    const handleChange = (event:any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                sx={{marginBottom:1}}
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                fullWidth
                required
            />
            <TextField
                sx={{marginBottom:1}}
                label="Password"
                variant="outlined"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                fullWidth
                required
            />
            <Grid container spacing={2}>
                <Grid item sx={{flexGrow:1}}>
                    <Button sx={{marginRight:1}} type="submit" variant="contained" size="small">Login</Button>
                    <Link style={{textDecoration:'none'}} to="/register">
                        <Button type="button" variant="outlined" size="small">Register</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link style={{textDecoration:'none'}} to="/password/reset">
                        <Button type="button" variant="contained" color="secondary">Forgotten Password?</Button>
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}

export default LoginForm;