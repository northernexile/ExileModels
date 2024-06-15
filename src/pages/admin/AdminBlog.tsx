import AdminLayout from "../../components/AdminLayout";
import StandardGrid from "../../components/StandardGrid";
import TitledParagraph from "../../components/blocks/TitledParagraph";

const AdminBlog = () => {
    return (
        <AdminLayout>
            <StandardGrid>
                <TitledParagraph
                    title="Blog (Admin)"
                    paragraph="Manage blog articles"
                />
            </StandardGrid>
       </AdminLayout>
    )
}

export default AdminBlog;