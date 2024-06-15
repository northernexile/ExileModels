import { Button } from "@mui/material";
import { DataTableColumnInterface } from "../../../models/data/data.table.column.interface";
import { Link } from "react-router-dom";


const renderEditButton = (params:any) => {
    const path = '/admin/users/edit/' + params.row.id
    

    return <Link to={path}><Button
        variant="contained"
        size="small"
        color="primary"
    >Edit</Button>
    </Link>
}

export const UserEditAction:DataTableColumnInterface  =  {
    field: 'edit',
    headerName: 'Edit',
    width:100,
    renderCell: renderEditButton,
    disableEventClickBubbling: true,
}



