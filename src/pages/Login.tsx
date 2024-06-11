
import { Card, CardContent, Grid } from "@mui/material";
import PublicLayout from "../components/PublicLayout"
import StandardGrid from "../components/StandardGrid";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {

    return (
        <PublicLayout>
            <StandardGrid>
            <Grid item xs={12}>
            <Card sx={{
                marginLeft:1,
                marginRight:1,
                marginBottom:1
            }}>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
            </Grid>             
            </StandardGrid>
        </PublicLayout>
    )
}

export default Login;