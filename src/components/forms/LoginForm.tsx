import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LoginApi } from '../../services/api/auth/login.api';
import Cookies from 'js-cookie';
import useAlert from "../alert/useAlert";

const LoginForm = () => {
    const navigate = useNavigate();
    const { setAlert } = useAlert();

    const loginApi = LoginApi;

    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const handleSubmit = (event:any) => {
        event.preventDefault()
        console.log(formData)
        loginApi.login(formData,true).then((response:any)=>{
            const tokenResponse = response.data?.access_token;
            const userData = JSON.stringify(response.data?.user);

            if( tokenResponse ) {
                Cookies.set('token',tokenResponse,{expires:7,secure: true})
            }

            if(userData) {
                Cookies.set('userRole',userData,{expires:7,secure:true})
            }

            setAlert('Logged in','success');

            if(tokenResponse && userData) {
                navigate("/",{replace:true})
            }
        }).catch((error)=>{
            setAlert('Log in failed','error')
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