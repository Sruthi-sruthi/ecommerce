import React, { useContext, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { buyproduct } from '../services/api'
import Navbar from './Navbar'

function Placeorderform() {

    const useridRef = useRef()
    const usernameRef = useRef()
    const addressRef = useRef()
    const phoneRef = useRef()
    const pinRef = useRef()
    const landmarkRef = useRef()
    const orderdateRef = useRef()
    const expectedRef = useRef()
    const statusRef = useRef()
    const navigate = useNavigate();


    const location = useLocation();
    const { loginuser } = useContext(UserContext)
    console.log(location.state);


   async function placeOrderProduct(){
    let today = new Date()
    let expecteddate = new Date()
    expecteddate.setDate(today.getDate() + 3)
    expecteddate = expecteddate.toLocaleDateString()
    let obj = {
        productid: location.state._id,
        mrp: location.state.mrp,
        userid: loginuser._id,
        username:loginuser.username ,
        address: addressRef.current.value,
        phone: phoneRef.current.value,
        pincode: pinRef.current.value,
        landmark: landmarkRef.current.value,
        orderdate: today.toLocaleDateString(),
        expecteddate,
        orderstatus: "placed",
        paymentmethod: "cash on delivery",
        Seller_id:location.state.Seller_id,
        url:location.state.url,
        title:location.state.title
    }
    console.log(obj);  
    let response=await buyproduct(obj)
        console.log(response.success);
        if(response.success){
          alert(response.message)    
         navigate("/");

        }else{
          alert(response.message)
          
        }
    }
  return (
    <>
    <Navbar/>
     <div className='buynow-form'>
                <input type="text" name="" id="" placeholder='username' ref={usernameRef} />
                <input type="text" name="" id="" placeholder='address' ref={addressRef} />
                <input type="text" name="" id="" placeholder='phone' ref={phoneRef} />
                <input type="text" name="" id="" placeholder='pincode' ref={pinRef} />
                <input type="text" name="" id="" placeholder='landmark' ref={landmarkRef} />
                payment methods:<br /><br />
                <button type='button'>onlinepayment</button><br />
                <button type='submit'>cash on delivery</button><br /><br />
                <button onClick={placeOrderProduct}>submit</button>

            </div>

    </>
  )
}

export default Placeorderform