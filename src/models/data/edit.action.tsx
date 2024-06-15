import { Button } from "@mui/material";
import { DataTableColumnInterface } from "./data.table.column.interface";

const renderEditButton = () => {
    return <Button
        variant="contained"
        size="small"
        color="primary"
    >Edit</Button>
}

export const EditAction:DataTableColumnInterface  = {
    field: 'edit',
    headerName: 'Edit',
    width:100,
    renderCell: renderEditButton
}

