import React, { useEffect, useState } from 'react'
import './SingleSellerProduct.css'
import SellerNavbar from './SellerNavbar';
import { getDeleteProduct, getSingleProduct } from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';


function SingleSellerProduct() {
  const [singleproducts, setsingleproducts] = useState()
  const navigate = useNavigate();

  let { id } = useParams()
  console.log(id + "flipkart");
  async function fetchSingleProduct() {
    let response = await getSingleProduct(id)
    console.log(response);
    setsingleproducts(response.singleproduct)

  }
  useEffect(() => {
    fetchSingleProduct()
  }, [])


  async function deleteProduct() {
    let { success, message } = await getDeleteProduct(id)
    if (success) {
      alert(message)
      navigate("/seller/sellerproduct");
    } else {
      alert("cannot delete product")
    }
  }


  function updateProducts() {
    navigate("/seller/updateproduct", { state: { singleproducts } })

  }

  return (
    <>
      <SellerNavbar />
      {
        singleproducts
        &&

        <div className="single-product-item-container">
          <div className="product-left-container">
            <div className="single-product-image">
              <img src={singleproducts.url} alt="" />
            </div>

          </div>
          <div className="product-right-container">
            <p>title:  {singleproducts.title}</p>
            <p>tagline:  {singleproducts.tagline}</p>
            <p>mrp:  {singleproducts.mrp}</p>
            <p>description:  {singleproducts.description}</p>
            <p>offers:  {singleproducts.offer}</p>
            <div className="seller-product-btn">
              <button onClick={deleteProduct} className='seller-btn'>delete</button>
              <button onClick={updateProducts} className='seller-btn'>update</button>
            </div>




          </div>
        </div>
      }

    </>
  )
}

export default SingleSellerProduct