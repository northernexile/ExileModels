import PublicLayout from "../components/PublicLayout"
import StandardGrid from "../components/StandardGrid";
import ResetPasswordForm from "../components/forms/ResetPasswordForm";

const ResetPassword = () => {
    return (
        <PublicLayout>
            <StandardGrid>
                <ResetPasswordForm />
            </StandardGrid>
        </PublicLayout>
    )
}

export default ResetPassword;