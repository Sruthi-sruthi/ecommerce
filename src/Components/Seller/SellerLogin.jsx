import React from 'react'
import Dialog from '@mui/material/Dialog';
import './SellerLogin.css'
import { loginSeller } from '../../services/api';
import { useRef,useContext} from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';



function SellerLogin(props) {
  const passwordRef=useRef()
  const emailRef=useRef()

const{setloginuser,setusertype}=useContext(UserContext)
const navigate=useNavigate()


  async function dologin(){
    let obj={
        email:emailRef.current.value,
        password:passwordRef.current.value
    }
    console.log(obj);
    let response=await loginSeller(obj)
        console.log(response.success);
        if(response.success){
          alert(response.seller.username)
          setusertype("seller")
          setloginuser(response.seller)
          navigate("/seller")
        }else{
          alert(response.message)
        }
    }
  return (
    <div>
     
        <Dialog open={true} onClose={()=>{props.setopen(false)}}>
         <div className="main-container">
        <div className="login-container seller-login-image">
            <p className='log'>Login</p>
            <p className='subhead'>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="details-container">
            <div className="data">
                    <input className='input-fields' type="text" placeholder='enter email' ref={emailRef}/><br />
                    <input className='input-fields' type="password" placeholder='password' ref={passwordRef}/>
                        <p className='txt3'>By continuing, you agree to Flipkart's <span> terms of use</span> and <span> Privacy
                             Policy</span>
                        </p>
                        <button className='seller-login-btn' onClick={dologin}>Login</button>
                        <p className='or'>OR</p>
                        <button className='otp'>Request OTP</button>
                        <div className="link">
                        <a href="">new to flipkart?create an account</a>

                        </div>
            </div>
        </div>
         </div>
         </Dialog>
    </div>
  )
}

export default SellerLogin