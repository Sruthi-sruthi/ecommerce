import React from 'react'
import SellerNavbar from './SellerNavbar'
import './SellerHomePage.css'
import Fashionproduct from '../Fashionproduct'
import ProductList from '../ProductList'
import SellerFooter from './SellerFooter'
function SellerHomePage() {
  return (
    <div>
         <SellerNavbar/>
         <ProductList category="electronics"/>
         <ProductList category="kids"/>
         {/* <Fashionproduct/> */}
         <SellerFooter/>
    </div>
    
  )
}

export default SellerHomePage