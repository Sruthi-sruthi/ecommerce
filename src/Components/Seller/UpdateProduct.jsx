import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getUpdateProduct } from '../../services/api';
import './UpdateProduct.css'


function UpdateProduct() {
    let { id } = useParams()

    const [product, setproduct] = useState()
    const [title,setTitle ] = useState()
    const [tagline,setTagline ] = useState()
    const [mrp,setMrp ] = useState()
    const [description,setDescription ] = useState()
    const [url,setUrl ] = useState()
    const [offer,setOffer ] = useState()
    const location = useLocation();
    const navigate = useNavigate();


    // const state=location.state;
    useEffect(()=>{
    console.log(location);
    setTitle(location.state.singleproducts.title)
    setTagline(location.state.singleproducts.tagline)
    setMrp(location.state.singleproducts.mrp)
    setDescription(location.state.singleproducts.description)
    setUrl(location.state.singleproducts.url)
    setOffer(location.state.singleproducts.offer)
    setproduct(location.state.singleproducts)
   },[])

 async function updateSellerProduct(){
  let obj={
    title,
    tagline,
    mrp,
    description,
    url,
    offer,
  }
  console.log(obj,"id = ",product._id);
    let data=await getUpdateProduct(product._id,obj)
    console.log(data);
    if(data.success){
    alert(data.message)
    navigate("/seller/sellerproduct");
    }
    else{
    alert("cannot update product")
    }
    }
  return (
    <>
<div className='form-sec'>
            <h1>UPDATE PRODUCTS</h1>
            {
                product 
                &&
                <>
            <input type="text" name="title" placeholder='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <input type="text" name="tagline" placeholder='tagline' value={tagline} onChange={(e)=>{setTagline(e.target.value)}} />
            <input type="text" name="mrp" placeholder='mrp' value={mrp} onChange={(e)=>{setMrp(e.target.value)}}/>
            <input type="text" name="description" placeholder='description' value={description}onChange={(e)=>{setDescription(e.target.value)}} />
            <input type="text" name='url' placeholder='url' value={url} onChange={(e)=>{setUrl(e.target.value)}} />
            <input type="text" name="offer" placeholder='offer' value={offer} onChange={(e)=>{setOffer(e.target.value)}}/>
            <button className='seller-submit-btn' onClick={updateSellerProduct}>update</button>
                </>
            }
        </div>
    </>
  )
}

export default UpdateProduct
