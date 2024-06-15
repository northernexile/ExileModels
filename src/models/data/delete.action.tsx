import { Button } from "@mui/material";
import { DataTableColumnInterface } from "./data.table.column.interface";

const renderDeleteButton = () => {
    return <Button
        variant="contained"
        size="small"
        color="primary"
    >Delete</Button>
}

export const DeleteAction:DataTableColumnInterface  = {
    field: 'Delete',
    headerName: 'Delete',
    width:100,
    renderCell: renderDeleteButton
}

