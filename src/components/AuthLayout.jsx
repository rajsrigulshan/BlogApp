import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({children,authentication=true}){//check the paremeter here is object or not.
    const navigate=useNavigate();
    const [loader,setLoader]=useState(true);
    const authStatus=useSelector(state=>state.auth.status);

    useEffect(()=>{
        if(authentication && authentication!==authStatus){
            navigate("/login");
        }
        // TODO: chek for this, how it will navigate to the root url as both are false.
        else if(!authentication && authStatus!==authentication){
            navigate("/");
        }
        setLoader(false);
    },[authStatus,authentication,navigate]);

    return loader?<h1>Loading....</h1>:<>{children}</>
}