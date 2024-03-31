import React, { useEffect } from 'react'
import {useAuth} from "../Provider/AuthProvider";
const Logout = () => {
    const {removeTokenFromLocalStorage}= useAuth();

    useEffect(()=>{
        removeTokenFromLocalStorage();
    },[]);
}

export default Logout