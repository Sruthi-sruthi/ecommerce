import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from './Login';
import Signup from './Signup';
import { useState } from 'react';
function Navbar(){
    const[open,setopen]=useState(false)
    function openLogin(){
       setopen(true) 
    }

    const[signopen,setsignopen]=useState(false)
    function openSignup(){
        setsignopen(true)
    }
    return(
        <>
        <div className="nav">
            <div className="logo">
                <img className='flip-main' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
            <p className='explore'>Explore <span className='plus'>Plus</span>
            <img className='star' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" />
            </p>
            </div>
        <div className="search">
            <input className='search-input' type="text" placeholder='search for product,brands and more'/>
            <SearchIcon/>
        </div>
 
       <button className='login' onClick={openLogin}>Login</button>
       <Login open={open} setopen={setopen}/>
       <button className='signup' onClick={openSignup}>signup</button>
       <Signup signopen={signopen} setsignopen={setsignopen}/>

       {/* <p className='text text1'>become seller</p> */}

       <p className='text'>More
       <ArrowDropDownIcon/>
       </p>
       <p className='text'>
       <ShoppingCartIcon/>
        Cart</p>
        </div>
        </>
    )
}
export default Navbar;