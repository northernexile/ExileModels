
import PublicLayout from "../components/PublicLayout"
import StandardGrid from "../components/StandardGrid";
import LoginForm from "../components/forms/LoginForm";
import TitledParagraph from "../components/blocks/TitledParagraph";

const Login = () => {

    return (
        <PublicLayout>
            <StandardGrid>
                <TitledParagraph 
                title="Login"  
                paragraph="Please enter your email and password to log in."
                />
                <LoginForm />
            </StandardGrid>
        </PublicLayout>
    )
}

export default Login;