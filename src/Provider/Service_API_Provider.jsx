import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { reducer } from "../Reducer/Reducer.js";

const ApiProvider = createContext();

const Service_API_Provider = ({ children }) => {

    const api = `https://fakestoreapi.com/products`;

    const initialState = {
        loading: true,
        api_data: [],
        search_category:"",
        currentUser:""
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchapi = async (api) => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            // console.log(data);
            dispatch({
                type: "api_fetched",
                payload: {
                    api: data
                }
            });
        } catch (error) {
            console.error("Error fetching API:", error);
        }
    }

    const searchQuery=(query)=>{
        // console.log(query);
        dispatch({
            type:"search_query",
            payload:{
                query:query
            }
        })
    }
    // useEffect(() => {
    //     fetchapi(`${api}?category=${state.search_category}`);
    // }, [state.search_category]);

    const sendCurrentUser=(data)=>{
        // console.log("data"+data);;
        dispatch({
            type:"send_current_user",
            payload:{
                data:data
            }
        })
    }


    useEffect(() => {
        fetchapi(api);
    }, []);



    return (
        <ApiProvider.Provider value={{ ...state,searchQuery,sendCurrentUser}}>
            {children}
        </ApiProvider.Provider>
    )
}

export const useAPIContext = () => {
    return useContext(ApiProvider);
}

export default Service_API_Provider;
