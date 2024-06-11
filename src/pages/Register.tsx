import PublicLayout from "../components/PublicLayout"
import StandardGrid from "../components/StandardGrid";
import TitledParagraph from "../components/blocks/TitledParagraph";
import RegistrationForm from "../components/forms/RegistrationForm";

const Register = () => {
    return (
        <PublicLayout>
            <StandardGrid>
                <TitledParagraph
                    title="Register"
                    paragraph="Please enter your details in the form below to register"
                />
                <RegistrationForm />
            </StandardGrid>
        </PublicLayout>
    )
}

export default Register;