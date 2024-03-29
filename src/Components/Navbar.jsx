import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from './Login';
import Signup from './Signup';
import { useState } from 'react';
import { useContext } from 'react';
import { DemoContext } from '../context/DemoContext';
import { UserContext } from '../context/UserContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Navbar() {
    const [open, setopen] = useState(false)
    const { loginuser, setloginuser } = useContext(UserContext)
    const navigate = useNavigate();


    function openLogin() {
        setopen(true)
    }
    const [signopen, setsignopen] = useState(false)
    function openSignup() {
        setsignopen(true)
    }

    // const{demo,setdemo}=useContext(DemoContext)
    // function changeDemo(){
    //  setdemo("value changed")
    // }

    function logout() {
        setloginuser(null)
    }
   function cart(){
    if(loginuser){
        navigate("/cart")
    }
    else{
        setopen(true)
    }

   }
    return (
        <>
            <div className="nav">
                <div className="logo">

                    <img className='flip-main' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
                    <p className='explore'>Explore <span className='plus'>Plus</span>
                        <img className='star' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" />
                    </p>
                </div>
                <div className="search">
                    <input className='search-input' type="text" placeholder="Search for products,brands and more" />
                    <SearchIcon />
                </div>

                {

                    loginuser
                        ?
                        <p className='user-name'>{loginuser.username}</p>
                        :
                        <>
                            <button className='login' onClick={openLogin}>Login</button>
                            <button className='signup' onClick={openSignup}>signup</button>
                        </>
                }



                <Login open={open} setopen={setopen} />
                <Signup signopen={signopen} setsignopen={setsignopen} />

                <p className='text'>More
                    <ArrowDropDownIcon />
                </p>
                <p className='text' onClick={cart}>
                    <ShoppingCartIcon />
                    Cart</p>
                {/* <a href="">view orders</a> */}
                <Link to="/orderedproduct">view orders</Link>
                {loginuser && <button className='logout-btn' onClick={logout}>logout</button>}
            </div>
        </>
    )
}
export default Navbar;