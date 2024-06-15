import { useEffect, useState } from "react";
import { UserApi } from "../../../services/api/user/user.api";



const UserList = () => {
    const [users,setUsers] = useState([])

    useEffect(() => {
        UserApi.list(true).then((users)=>{
            console.log(users)
        }).catch((error) =>{
            console.error(error)
        })
    })

    return (<>List of users</>)
}

export default UserList;