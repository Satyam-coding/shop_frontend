import React, { useEffect, useState } from 'react'
import {Cards} from "../components/Card";

import { Loader } from './Loader';
import { useAPIContext } from "../Provider/Service_API_Provider";
import Search from '../components/Search';

const Services = () => {
 
  const { loading, api_data } =  useAPIContext();;

  if (loading) {
    return (
      <Loader />
    )
  }
  return (

    <>
      <div className='flex justify-center items-center'>
        {/* <Search/> */}
      </div>
      <div className='flex justify-center flex-wrap '>
        {
          api_data.map((curr) => {
           

            return (
              <Cards key={curr.id} curr ={curr}/>
            )
          })};
      </div>


    </>
  );
}

export default Services