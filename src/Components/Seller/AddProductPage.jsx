import React, { useContext, useRef } from 'react'
import SellerNavbar from './SellerNavbar'
import './AddProductPage.css'
import { sellerAddProduct } from '../../services/api'
import { UserContext } from '../../context/UserContext'

function AddProductPage() {
const{loginuser}=useContext(UserContext)

  const titleRef=useRef()
  const taglineRef=useRef()
  const mrpRef=useRef()
  const descriptionRef=useRef()
  const urlRef=useRef()
  const offerRef=useRef()
  async function addproduct(){
    let obj={
      title :titleRef.current.value,
      tagline:taglineRef.current.value,
      mrp:mrpRef.current.value,
      description:descriptionRef.current.value,
      url:urlRef.current.value,
      offer:offerRef.current.value,
      Seller_id:loginuser._id,
      Seller_name:loginuser.username,
    }
    console.log(obj);
    let response=await sellerAddProduct(obj)
    console.log(response.success);
    if(response.success){
      alert(response.message)
    }else{
      alert(response.message)
    }
    
  }
  return (
    <div>
        <SellerNavbar/>
       
        <div className='form-sec'>
            <h1>ADD PRODUCTS</h1>
            <input type="text" name="title" placeholder='title' ref={titleRef}/>
            <input type="text" name="tagline" placeholder='tagline' ref={taglineRef}/>
            <input type="text" name="mrp" placeholder='mrp' ref={mrpRef}/>
            <input type="text" name="description" placeholder='description' ref={descriptionRef}/>
            <input type="text" name='url' placeholder='url' ref={urlRef}/>
            <input type="text" name="offer" placeholder='offer' ref={offerRef}/>
            <button className='seller-submit-btn' onClick={addproduct}>submit</button>
            
        </div>
       
    </div>
  )
}

export default AddProductPage