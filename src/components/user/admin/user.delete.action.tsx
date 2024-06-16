import { Button } from "@mui/material";
import { DataTableColumnInterface } from "../../../models/data/data.table.column.interface";
import { confirmDialog } from "../../dialog/Confirm";
const renderDeleteButton = (params:any) => {
    const path = '/admin/users/delete/' + params.row.id
    return <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={() => {
            console.log(path)
            confirmDialog('Delete user?',()=>
                console.log('deleting '+path)
            )
        }}
    >Delete</Button>
}

export const UserDeleteAction:DataTableColumnInterface  = {
    field: 'Delete',
    headerName: 'Delete',
    width:100,
    renderCell: renderDeleteButton,
    disableEventClickBubbling:true
}

