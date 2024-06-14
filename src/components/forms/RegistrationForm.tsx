import { Grid, Button, TextField } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { RegistrationInterface } from "../../models/user/registration/registration.interface"
import useAlert from "../alert/useAlert"
import { RegistrationApi } from "../../services/api/user/registration.api"

const RegistrationForm = () => {
    const { setAlert } = useAlert() 
    const navigate = useNavigate()
    const registration = RegistrationApi;
    const [formData, setFormData] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        firstNames:'',
        lastName:''
    })

    const handleSubmit = (event:any) => {
        event.preventDefault()

        const registrationPayload:RegistrationInterface = {
            email:formData.email,
            password:formData.password,
            confirm:formData.confirmPassword,
            username:[formData.firstNames,formData.lastName].join(' ')
        }

        registration.register(registrationPayload,true).then(() => {
            setAlert('User '+formData.email+' registered','success');
            navigate('/login',{replace:true})
        }).catch(() => {
            setAlert('Registration failed','error')
        });

    }

    const handleChange = (event:any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                sx={{marginBottom:1}}
                label="First names"
                variant="outlined"
                name="firstNames"
                value={formData.firstNames}
                onChange={handleChange}
                type="text"
                fullWidth
                required
                error
                helperText="Firstnames required"
            />
            <TextField
                sx={{marginBottom:1}}
                label="Last name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                helperText="Last name is required"
                fullWidth
                required
                error
            />
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
                error
                helperText="Enter a valid email"
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
                error
                helperText="Enter your password"
            />
            <TextField
                sx={{marginBottom:1}}
                label="Confirm Password"
                variant="outlined"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type="password"
                fullWidth
                required
            />
            <Grid container spacing={2}>
                <Grid item sx={{flexGrow:1}}>
                    <Button sx={{marginRight:1}} type="submit" variant="contained" size="small">Register</Button>
                    <Link style={{textDecoration:'none'}} to="/login">
                        <Button type="button" variant="outlined" size="small">Login</Button>
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}

export default RegistrationForm;