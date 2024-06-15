import { useEffect, useState } from "react";
import { UserApi } from "../../../services/api/user/user.api";
import useAlert from "../../alert/useAlert";
import { Box, CircularProgress } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { UserListColumnCollection } from "./UserListColumnCollection";

const UserList = () => {
    const [users,setUsers] = useState([])
    const { setAlert } = useAlert();

    useEffect(() => {
        if(!users.length){
          UserApi.list(false).then((usersResponse)=>{
              setUsers(usersResponse.data)
          }).catch((error) =>{
              console.error(error)
              setAlert(error.message,"error")
          })
        }
    })

    const hasUsers = () => {
        return users.length
    }

    const columns: GridColDef<(typeof users)[number]>[] = UserListColumnCollection.columns



    if(hasUsers()) {
        return (<Box>
            <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
        </Box>)
        
    }

    return <CircularProgress />
    
}

export default UserList;