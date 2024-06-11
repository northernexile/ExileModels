
import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"


const ContactForm = () => {
    const [formData, setFormData] = useState({
        email:'',
        message:''
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
                label="Message"
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleChange}
                type="text"
                fullWidth
                required
            />
            <Grid container spacing={2}>
                <Grid item sx={{flexGrow:1}}>
                    <Button sx={{marginRight:1}} type="submit" variant="contained" size="small">Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default ContactForm;