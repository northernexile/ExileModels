import AdminLayout from "../../components/AdminLayout";
import StandardGrid from "../../components/StandardGrid";
import TitledParagraph from "../../components/blocks/TitledParagraph";

const AdminOrders = () => {
    return (
        <AdminLayout>
            <StandardGrid>
                <TitledParagraph
                    title="Orders (Admin)"
                    paragraph="Manage orders"
                />
            </StandardGrid>
       </AdminLayout>
    )
}

export default AdminOrders;