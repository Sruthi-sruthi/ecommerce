import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Orderedproduct.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { UserContext } from '../context/UserContext';
import { userOrders } from '../services/api';

function OrderedProduct() {
  const { loginuser } = useContext(UserContext)
  // console.log(loginuser);
  const [allproducts, setallproducts] = useState()


  async function fetchgetallorders() {
    let response = await userOrders(loginuser._id)
    setallproducts(response.orders)
    console.log(response);

  }
  useEffect(() => {
    fetchgetallorders()
  })
  return (
    <>
      <Navbar />
      <div className="first-section">
        <img className='giftbox' src="https://cdn3.iconfinder.com/data/icons/xmas-flat-set-version-three/512/Gift_Box-512.png" alt="" />
        <div className="first-data">
          <h2>Order placed for ₹304!</h2>
          <p>your 1 item will be delivered by tue jan 24th 2023.</p>
        </div>
      </div>



{/* {
  allproducts && allproducts.map((p)=>{
    return(
      <div className="second-section">
        <h3>Delivery Address</h3>
        <p>{p.username}</p>
        <p> {p.address}</p>
        <p>{p.pincode}</p>
        <p>{p.phone}</p>
      </div>
    )
  })
} */}

      <div className="second-section">
        <h3>Delivery Address</h3>
        <p><b> {allproducts && allproducts[0].username}</b></p>
        <p><b> Address : </b>{allproducts && allproducts[0].address}</p>
        <p><b> Pincode :</b>{allproducts && allproducts[0].pincode}</p>
        <p> <b> Phone number : </b>{allproducts && allproducts[0].phone}</p>
      </div>

{
  allproducts && allproducts.map((p)=>{
return(
      <div className="third-section">
        <img src={p.url} alt="" />
        <div className='third-data'>
          <p><b> {p.title} </b></p>
          <p>₹{p.mrp}</p>
          <p>seller: Sruthi</p>

        </div>
        <div className="delivery">
          <LocalShippingIcon className='shipping' />
          <p> <b>Delivery expected by {p.expecteddate}</b> </p>
        </div>
      </div>
      )
    })
}
    </>
  )
}

export default OrderedProduct