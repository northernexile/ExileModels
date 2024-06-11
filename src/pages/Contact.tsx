import PublicLayout from "../components/PublicLayout"
import StandardGrid from "../components/StandardGrid";
import TitledParagraph from "../components/blocks/TitledParagraph";
import ContactForm from "../components/forms/ContactForm";

const Contact = () => {
    return (
        <PublicLayout>
            <StandardGrid>
                <TitledParagraph
                    title="Get In Touch"
                    paragraph="Use the form below to get in touch with us."
                />
                <ContactForm />
            </StandardGrid>
        </PublicLayout>
    )
}

export default Contact;