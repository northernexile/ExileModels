import { Card, CardContent, Grid } from "@mui/material"

const StandardGrid  = ({children} :any) => {
    return (
        <Grid container sx={{marginTop:2}}>
             <Grid item xs={12}>
            <Card sx={{
                marginLeft:1,
                marginRight:1,
                marginBottom:1
            }}>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
            </Grid>
        </Grid>
    )
}

export default StandardGrid;