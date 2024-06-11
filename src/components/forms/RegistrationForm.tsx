import { Grid, Button, TextField } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        firstNames:'',
        lastName:''
    })

    const handleSubmit = (event:any) => {
        event.preventDefault()

        console.log(formData)
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
            />
            <TextField
                sx={{marginBottom:1}}
                label="Last name"
                variant="outlined"
                name="firstNames"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                fullWidth
                required
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