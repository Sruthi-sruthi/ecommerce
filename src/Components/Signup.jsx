import React, { useRef } from 'react'
import Dialog from '@mui/material/Dialog';
import './Signup.css'
import { signupUser } from '../services/api';

export default function Signup({signopen,setsignopen}) {
  const usernameRef=useRef()
  const passwordRef=useRef()
  const emailRef=useRef()
  const mobileRef=useRef()
  async function dosignup(){
    // alert(mobileRef.current.value)
    let obj={
      username :usernameRef.current.value,
      password:passwordRef.current.value,
      email:emailRef.current.value,
      phone:mobileRef.current.value
    }
    console.log(obj);
   let response=await signupUser(obj)
    console.log(response.success);
    if(response.success){
      alert(response.message)
    }else{
      alert(response.message)
    }
    }

  return (
    <>
     <Dialog  open={signopen} onClose={()=>{setsignopen(false)}}>
        <div className="signup-page">
            <div className="signup-container signup-image">
                <p className='heading'>Looks like you're new here! </p>
                <p className='para'>signup with your mobile number
                    to get started
                </p>
            </div>
            <div className="second-container">
            <div className="data">
                    <input className='input-fields' type="text" placeholder='username' ref={usernameRef}/><br />
                    <input className='input-fields' type="text" placeholder='password' ref={passwordRef}/><br />
                    <input className='input-fields' type="text" placeholder='email'ref={emailRef} /><br />
                    <input className='input-fields' type="text" placeholder='mobile number' ref={mobileRef}/><br />
                    <p className='txt3'>By continuing, you agree to Flipkart's <span> terms of use</span> and <span>  Privacy   
                      Policy</span>
                        </p>    
                        <button className='login-btn' onClick={dosignup}>continue</button>
                        <button className='otp'>Existing User? Log In</button>


            </div>
            </div>
        </div>
     </Dialog>
    </>
  )
}
