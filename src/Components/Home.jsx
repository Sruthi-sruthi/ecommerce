import React from 'react'
import Navbar from './Navbar';
import Maincarousal from './Maincarousal';
import Banner from './Banner';
import ProductList from './ProductList';
import Bankimage from './Bankimage';
import Fashionproduct from './Fashionproduct';
import Productitem from './Productitem';



export default function Home() {
  return (
    <div> <Navbar/>
    <Banner/>
    <Maincarousal/>
    <Bankimage/>
    <ProductList/>
    {/* <Product/> */}
    <Fashionproduct/>
    {/* <Productitem/> */}
    </div>
  )
}
