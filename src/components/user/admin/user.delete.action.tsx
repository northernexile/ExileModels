import { Button } from "@mui/material";
import { DataTableColumnInterface } from "./data.table.column.interface";

const renderDeleteButton = (params:any) => {
    const path = '/admin/users/edit/' + params.row.id
    return <Button
        variant="contained"
        size="small"
        color="primary"
    >Delete</Button>
}

export const UserDeleteAction:DataTableColumnInterface  = {
    field: 'Delete',
    headerName: 'Delete',
    width:100,
    renderCell: renderDeleteButton,
    disableEventClickBubbling:true
}

