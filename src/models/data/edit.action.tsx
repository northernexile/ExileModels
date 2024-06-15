import { Button } from "@mui/material";
import { DataTableColumnInterface } from "./data.table.column.interface";

const renderEditButton = (params:any) => {
    return <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={()=>{
            console.log(params.row.id)
        }}
    >Edit</Button>
}

export const EditAction:DataTableColumnInterface  =  {
    field: 'edit',
    headerName: 'Edit',
    width:100,
    renderCell: renderEditButton
}



