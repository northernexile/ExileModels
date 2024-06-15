import AdminLayout from "../../components/AdminLayout";
import StandardGrid from "../../components/StandardGrid";
import TitledParagraph from "../../components/blocks/TitledParagraph";

const AdminRoles = () => {
    return (
        <AdminLayout>
        <StandardGrid>
            <TitledParagraph
                title="Roles (Admin)"
                paragraph="Manage roles"
            />
        </StandardGrid>
   </AdminLayout>
    )
}

export default AdminRoles;