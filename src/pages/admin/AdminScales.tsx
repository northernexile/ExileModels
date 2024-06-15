import AdminLayout from "../../components/AdminLayout";
import StandardGrid from "../../components/StandardGrid";
import TitledParagraph from "../../components/blocks/TitledParagraph";

const AdminScales = () => {
    return (
       <AdminLayout>
            <StandardGrid>
                <TitledParagraph
                    title="Scales (Admin)"
                    paragraph="Manage list of scales"
                />
            </StandardGrid>
       </AdminLayout>
    )
}

export default AdminScales;