import React from 'react'
import SellerNavbar from './SellerNavbar'
import './SellerHomePage.css'
import Fashionproduct from '../Fashionproduct'
import ProductList from '../ProductList'
function SellerHomePage() {
  return (
    <div>
         <SellerNavbar/>
         <ProductList/>
         <Fashionproduct/>
    </div>
    
  )
}

export default SellerHomePage