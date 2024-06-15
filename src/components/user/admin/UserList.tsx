import { useEffect, useState } from "react";
import { UserApi } from "../../../services/api/user/user.api";
import useAlert from "../../alert/useAlert";



const UserList = () => {
    const [users,setUsers] = useState([])
    const { setAlert } = useAlert();

    useEffect(() => {
        UserApi.list(true).then((users)=>{
            console.log(users)
        }).catch((error) =>{
            console.error(error)
            console.log(error.message)
            setAlert(error.message,"error")
        })
    })

    return (<>List of users</>)
}

export default UserList;