import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios';
import { dividerClasses } from '@mui/material';
import { ClassNames } from '@emotion/react';
import ProductList from "../components/ProductList/ProductList";
import Banner from "../components/Banner/Banner"; 

const AllProducts = () => {

  const [count,setCount]=useState(0);
  const [products,setProducts]=useState([]);

  //This will be executed for each state change-whatsoever
  useEffect(()=>{
    //console.log('Inside useEffect with no dependency array')
  });

  //This will be executed just after the first render
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
      setProducts(()=>res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
    },[]);

  //This will be executed if count changes
  useEffect(()=>{
    //console.log('Inside useEffect with count as the dependency array')
  },[count]);

  return (
    <div>
      {/*<button onClick={()=>setCount(count+1)}>Increment</button>*/}
      {/*<h2>Count:{count}</h2>*/}
      <Banner/>
      <ProductList products={products}/>
    </div>
  )
}

export default AllProducts


