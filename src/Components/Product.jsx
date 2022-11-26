import './Product.css'
function Product(props){
    return(
        <>
        <div className="single-products">
    <img className="sub-carousal-image" src={props.productimage}/>
    <h4 className='product-title'>{props.title}</h4>
    <p className='price'>{props.price}</p>
    <p className='description'>{props.description}</p>
    </div>
        </>
    )
}
export default Product