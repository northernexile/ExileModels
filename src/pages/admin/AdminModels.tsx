import AdminLayout from "../../components/AdminLayout";
import StandardGrid from "../../components/StandardGrid";
import TitledParagraph from "../../components/blocks/TitledParagraph";

const AdminModels = () => {
    return (
        <AdminLayout>
            <StandardGrid>
                <TitledParagraph
                    title="Models (Admin)"
                    paragraph="Manage models"
                />
            </StandardGrid>
       </AdminLayout>
    )
}

export default AdminModels;