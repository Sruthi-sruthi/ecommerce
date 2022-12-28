import React from 'react'
import Dialog from '@mui/material/Dialog';
import './SellerSignup.css';
import { useRef } from 'react';
import { signupSeller } from '../../services/api';


function SellerSignup() {
  const usernameRef=useRef()
  const passwordRef=useRef()
  const emailRef=useRef()
  const mobileRef=useRef()
 async function dosignup(){
    let obj={
      username :usernameRef.current.value,
      password:passwordRef.current.value,
      email:emailRef.current.value,
      phone:mobileRef.current.value
    }
    console.log(obj);
    let response=await signupSeller(obj)
    console.log(response.success);
    if(response.success){
      alert(response.message)
    }else{
      alert(response.message)
    }
  }
  return (
    <div>
 <Dialog  open={true} onClose={false}>
        <div className="signup-page">
            <div className="signup-container seller-signup-image">
                <p className='heading'>Looks like you're new here! </p>
                <p className='para'>signup with your mobile number
                    to get started
                </p>
            </div>
            <div className="second-container">
            <div className="data">
                    <input className='input-fields' type="text" placeholder='username' ref={usernameRef}/><br />
                    <input className='input-fields' type="text" placeholder='password' ref={passwordRef}/><br />
                    <input className='input-fields' type="text" placeholder='email' ref={emailRef}/><br />
                    <input className='input-fields' type="text" placeholder='mobile number' ref={mobileRef}/><br />
                    <p className='txt3'>By continuing, you agree to Flipkart's <span> terms of use</span> and <span>  Privacy   
                      Policy</span>
                        </p>    
                        <button className='signup-login-btn' onClick={dosignup}>continue</button>
                        <button className='otp'>Existing User? Log In</button>


            </div>
            </div>
        </div>
     </Dialog>

    </div>
  )
}

export default SellerSignup