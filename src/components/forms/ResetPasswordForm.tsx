import { Grid, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPasswordForm = () => {
    const [formData, setFormData] = useState({
        email:'',
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
        <form>
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
            <Grid container spacing={2}>
                <Grid item sx={{flexGrow:1}}>
                    <Button sx={{marginRight:1}} type="submit" variant="contained" size="small">
                        Send Password Reset Email
                    </Button>
                </Grid>
                <Grid item>
                    <Link style={{textDecoration:'none'}} to="/login">
                        <Button type="button" variant="contained" color="secondary">Cancel</Button>
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}

export default ResetPasswordForm;