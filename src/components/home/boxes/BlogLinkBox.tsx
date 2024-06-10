import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const BlogLinkBox = () => {
    
    return (<>
        <Grid item xs={12} md={6} sx={{marginBottom:2}}>
        <Card sx={{
                marginLeft:1,
                marginRight:1,
                marginBottom:1
            }}> 
                <CardMedia
                     image="/src/assets/Norchard.png"
                     title="Small hut at Norchard Junction in the Forest of Deam"
                     sx={{height:140}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Blog
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        We are prototyping and building a product range and developing web based tools for DCC.
                        Check out the blog to keep up with what's going on.
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

export default BlogLinkBox;