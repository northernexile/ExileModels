import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const ThrottleLinkBox = () => {
    
    return (<>
        <Grid item xs={12} md={6} sx={{marginBottom:2}}>
            <Card sx={{
                marginLeft:1,
                marginRight:1,
                marginBottom:1
            }}>
            <CardMedia
                    image="/src/assets/LydhamManor.png"
                    title="An Image of Lydham Manor at Kingswear Station, Devon"
                    sx={{height:140}}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Web Throttle
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <em>Coming soon...</em>&nbsp;
                    A Web Throttle to control model railway layouts using systems such as DCC-EX
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small">Share</Button>
                <Button variant="outlined" size="small">Learn more</Button>
            </CardActions>
            </Card>
        </Grid>
    </>)
}

export default ThrottleLinkBox;