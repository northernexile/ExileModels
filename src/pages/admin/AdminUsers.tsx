import AdminLayout from "../../components/AdminLayout";
import StandardGrid from "../../components/StandardGrid";
import TitledParagraph from "../../components/blocks/TitledParagraph";
import UserList from "../../components/user/admin/UserList";

const AdminUsers = () => {
    return (
        <AdminLayout>
            <StandardGrid>
                <TitledParagraph
                    title="Users (Admin)"
                    paragraph="Manage system users"
                />
                <UserList />
            </StandardGrid>
        </AdminLayout>
    )
}

export default AdminUsers;