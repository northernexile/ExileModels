import PublicLayout from "../components/PublicLayout"
import StandardGrid from "../components/StandardGrid";
import RegistrationForm from "../components/forms/RegistrationForm";

const Register = () => {
    return (
        <PublicLayout>
            <StandardGrid>
                <RegistrationForm />
            </StandardGrid>
        </PublicLayout>
    )
}

export default Register;