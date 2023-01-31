import React, { useContext, useState } from 'react'
import SellerNavbar from './SellerNavbar'
import './SellerProductList.css'
import { useEffect } from 'react'
import { FetchSellerProduct } from '../../services/api'
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom'


function SellerProductList() {
const{loginuser}=useContext(UserContext)
const[sellerproducts,setsellerproducts]=useState()

async function getAllProducts(){
  let response=await FetchSellerProduct(loginuser._id)
  
  setsellerproducts(response.sellerproduct)
  console.log(response)

}
  useEffect(()=>{
    getAllProducts()
  })
  return (
    <>
    <SellerNavbar/>
    <div className="seller-table">
    <h1 className='product-head'>ALL PRODUCTS</h1>
    <table border="1px solid black" className='tab'>
    <tr>
      <th>name</th>
      <th>price</th>
      <th>operations</th>
    </tr>
  {
    sellerproducts && sellerproducts.map((p)=>{
      return(
        <tr>
          <td>{p.title}</td>
          <td>{p.mrp}</td>
          <td><Link to={"/seller/singlesellerproduct/"+p._id}><button className='view-btn'>view</button></Link></td>
        </tr>
      )
    })
  }
    </table>
    </div>
    </>
  )
}

export default SellerProductList