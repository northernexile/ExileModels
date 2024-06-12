import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../services/api/auth/login.api";
import { CircularProgress } from "@mui/material";

const Logout = () => {
    const navigate = useNavigate();

  useEffect(() => {
    LoginApi.logout().then(()=>{
        navigate("/",{replace:true})
    })
  }, []);

  return <CircularProgress />
}

export default Logout;