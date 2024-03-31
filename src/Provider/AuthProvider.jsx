import React, { useContext, useEffect, useState } from 'react'

const MyContext = React.createContext();
const BASE_URL='http://localhost:7000';
const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const[userData,setUserData]= useState("");
    const setTokenToLocalStorage = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    }
    const removeTokenFromLocalStorage = () => {
        localStorage.removeItem('token');
        setToken(null);
    }
    let isLoggedIn=!!token;
    
    const authorize = async () => {

        const response = await fetch('http://localhost:7000/user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`

            }
        }
        );

        const data= await response.json(); // it is used to make json->obj

        if(response.ok){
            setUserData(data);
        }
    }

    useEffect(
        () => {
            authorize();
        },[token]);



    return (
        <MyContext.Provider value={{BASE_URL, isLoggedIn, setTokenToLocalStorage,removeTokenFromLocalStorage,userData}}>
            {children}
        </MyContext.Provider>
    )
}

  export const useAuth = () => {
        return useContext(MyContext);
    }
export default AuthProvider