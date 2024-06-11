import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ContactLinkBox = () => {
    
    return (<>
        <Grid item xs={12} md={6} sx={{marginBottom:2}}>
            <Card sx={{
                marginLeft:1,
                marginRight:1,
                marginBottom:1
            }}> 
                <CardMedia
                    image="/src/assets/Shunter.png"
                    title="A Class 08 at Paignton station, Devon"
                    sx={{height:140}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Get In Touch
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Contact us about upcoming products, the web throttle, custom orders or anytthing really
                    </Typography> 
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small">Share</Button>
                    <Link style={{textDecoration:'none'}} to="/contact">
                        <Button variant="outlined" size="small">
                            Learn more
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    </>)
}

export default ContactLinkBox;