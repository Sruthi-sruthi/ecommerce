import React, { useContext, useRef } from 'react'
import Dialog from '@mui/material/Dialog';
import './Login.css'
import { loginUser } from '../services/api';
import { UserContext } from '../context/UserContext';

function Login(props){
const passwordRef=useRef()
const emailRef=useRef()


const{loginuser,setloginuser,setusertype}=useContext(UserContext)

async function dologin(){
let obj={
    email:emailRef.current.value,
    password:passwordRef.current.value
}
console.log(obj);
let response=await loginUser(obj)
    console.log(response.success);
    if(response.success){
      alert(response.user.username)
      setloginuser(response.user)
      setusertype("user")
    }else{
      alert(response.message)
    }
}
    return(
        <>
         <Dialog  open={props.open} onClose={()=>{props.setopen(false)}}>
         <div className="main-container">
        <div className="login-container login-image">
            <p className='log'>Login</p>
            <p className='subhead'>Get access to your Orders, Wishlist and Recommendations {loginuser && loginuser.username}</p>
        </div>
        <div className="details-container">
            <div className="data">
                    <input className='input-fields' type="text" placeholder='enter email' ref={emailRef} /><br />
                    <input className='input-fields' type="password" placeholder='password' ref={passwordRef} />
                        <p className='txt3'>By continuing, you agree to Flipkart's <span> terms of use</span> and <span> Privacy
                             Policy</span>
                        </p>
                        <button className='login-btn' onClick={dologin}>Login</button>
                        <p className='or'>OR</p>
                        <button className='otp'>Request OTP</button>
                        <div className="link">
                        <a href="">new to flipkart?create an account</a>

                        </div>
            </div>
        </div>
         </div>
         </Dialog>
        </>
    )
}
export default Login