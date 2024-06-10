import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const ModelLinkBox = () => {
    
    return (<>
        <Grid item xs={12} md={6} sx={{marginBottom:2}}>
            <Card sx={{
                marginLeft:1,
                marginRight:1,
                marginBottom:1
            }}>
                <CardMedia
                    image="/src/assets/McrPicc.png"
                    title="An Image of Manchester Piccadilly Station"
                    sx={{height:140}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Model Buildings
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        An upcoming range of model buildings that will be available in various scales 
                        to purchase and use with Model railways or in dioramas.
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

export default ModelLinkBox;