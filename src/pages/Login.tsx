
import PublicLayout from "../components/PublicLayout"
import StandardGrid from "../components/StandardGrid";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {

    return (
        <PublicLayout>
            <StandardGrid>
                <LoginForm />
            </StandardGrid>
        </PublicLayout>
    )
}

export default Login;