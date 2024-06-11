import { Grid } from "@mui/material"

const StandardGrid  = ({children} :any) => {
    return (
        <Grid container sx={{marginTop:2}}>
            {children}
        </Grid>
    )
}

export default StandardGrid;