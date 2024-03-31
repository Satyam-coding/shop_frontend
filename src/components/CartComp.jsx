import React from 'react'
import { useCartContext } from '../Provider/CartProvider';

const CartComp = ({curr}) => {
  const {removeItem}=useCartContext();

  return (
    <>
       <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
        <div className="md:w-4/12 2xl:w-1/4 w-full">
              <img src={curr.image} alt="Product 1" className="h-full object-center object-cover md:block hidden" />
              <img src={curr.image} alt="Product 1" className="md:hidden w-full h-full object-center object-cover" />
            </div>
            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
              <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
              <div className="flex items-center justify-between w-full">
                <p className="text-base font-black leading-none text-gray-800">{curr.title}</p>
                <p className="text-base font-black leading-none text-pink-800">Quantity: {curr.quantity}</p>
         
              </div>
              <p className="text-xs leading-3 text-gray-600 pt-2">{curr.description}</p>

              <div className="flex items-center justify-between pt-5">
                <div className="flex items-center">

                  {/* <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p> */}
                  <p  onClick={()=>removeItem(curr.id)}
                  
                  className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                </div>
                <p className="text-base font-black leading-none text-gray-800">{curr.price}</p>
              </div>
            </div>
            </div>
          
    </>
  )
}

export default CartComp