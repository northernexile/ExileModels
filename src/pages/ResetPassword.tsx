import PublicLayout from "../components/PublicLayout"
import StandardGrid from "../components/StandardGrid";
import TitledParagraph from "../components/blocks/TitledParagraph";
import ResetPasswordForm from "../components/forms/ResetPasswordForm";

const ResetPassword = () => {
    return (
        <PublicLayout>
            <StandardGrid>
                <TitledParagraph
                    title="Reset Your Password"
                    paragraph="Enter your email in the form below to receive an email in your inbox to allow you to rest your password."    
                />
                <ResetPasswordForm />
            </StandardGrid>
        </PublicLayout>
    )
}

export default ResetPassword;