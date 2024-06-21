import { Button } from "@mui/material";
import { DataTableColumnInterface } from "../../../models/data/data.table.column.interface";
import { confirmDialog } from "../../dialog/Confirm";
import { UserApi } from "../../../services/api/user/user.api";

const renderDeleteButton = (params:any) => {
    const path = '/admin/users/delete/' + params.row.id
    const id = parseInt(params.row.id)
    return <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={() => {
            console.log(path)
            confirmDialog('Delete user?',()=>
                deleteItem(id)
            )
        }}
    >Delete</Button>
}

const deleteItem = (id:number) => {
    const userApi = UserApi;

    userApi.remove(id,true).then(()=>{
    }).catch(()=>{
        console.error("Could not remove user");
    })
}

export const UserDeleteAction:DataTableColumnInterface  = {
    field: 'Delete',
    headerName: 'Delete',
    width:100,
    renderCell: renderDeleteButton,
    disableEventClickBubbling:true
}

