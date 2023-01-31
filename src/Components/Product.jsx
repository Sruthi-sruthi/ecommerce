import { useNavigate, useLocation } from 'react-router-dom';
import './Product.css'
function Product({ oneproduct }) {
    const navigate = useNavigate();
    
    
    function viewproduct() {
        navigate("/productitem", { state: { oneproduct } })
    }
    console.log(oneproduct);
    return (
        <>
           {
            oneproduct && 
            <div className="single-products" onClick={viewproduct}>
            <img className="sub-carousal-image" src={oneproduct.url} />
            <h4 className='product-title'>{oneproduct.title}</h4>
            <p className='price'>{oneproduct.mrp}</p>
        </div>
           }
        </>
    )
}
export default Product
