import AdminLayout from "../../components/AdminLayout";
import StandardGrid from "../../components/StandardGrid";
import TitledParagraph from "../../components/blocks/TitledParagraph";

const AdminContact = () => {
    return (
        <AdminLayout>
            <StandardGrid>
                <TitledParagraph
                    title="Contact (Admin)"
                    paragraph="Manage contact form enquiries"
                />
            </StandardGrid>
       </AdminLayout>
    )
}

export default AdminContact;