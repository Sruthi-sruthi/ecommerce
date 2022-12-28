import './SellerNavbar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

function SellerNavbar(){
   
const{loginuser}=useContext(UserContext)
    
    return(
        <>
        <div className="seller-nav">
            <div className="logo">
                <img className='flip-main' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
            <p className='explore'>Explore <span className='plus'>Plus</span>
            <img className='star' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" />
            </p>
            </div>
        
 
        <div className='button-section'>
        {
            loginuser
            ?
            <button>{loginuser.username}</button>
            :
        <button className='seller-reg'>register as seller</button>
        }
       
        <Link to="/seller/addproduct"><button className='start-seller'>start selling</button></Link>
        

        </div>
        </div>
        </>
    )
}
export default SellerNavbar;