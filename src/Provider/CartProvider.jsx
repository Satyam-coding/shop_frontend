import React, { createContext, useContext, useEffect } from 'react'
import { useReducer } from 'react';
const CartContext=createContext();
import { CartReducer } from '../Reducer/CartReducer';

export const CartProvider = ({children}) => {

    const getfromLS=()=>{
        const cart=localStorage.getItem("cart");
        if(cart){
            return JSON.parse(cart);
        }else{
            return [];
        }
    }
    
    const initialState={
        cart:getfromLS(),
        total_items:0,
        total_price:0
    }


    const[state,dispatch]=useReducer(CartReducer,initialState); 

    const sendCurrentUserCart=(cuser,quantity)=>{
        dispatch({
            type:"AddToCart",
            payload:{
                ...cuser,
                quantity
            }
        })
    }

    const removeItem=(id)=>{
        console.log(id);
        dispatch({
            type:"Remove_Item",
            payload:id
        })
    }
    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(state.cart));
        dispatch({
            type:"Update_Cart",
            payload:state.cart,
        })
    },[state.cart])
  return (
   <>
    <CartContext.Provider value={{...state,sendCurrentUserCart,removeItem}}>
    {children}
    </CartContext.Provider>
   </>
  )
}

export const useCartContext=()=>{
    return useContext(CartContext);
}
