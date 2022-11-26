import './Cart.css'
import Navbar from './Navbar'

function Cart() {
    return (
        <>
            <div className="cart-section">
                <Navbar/>
                <div className="cart-page">
                    <div className="cart-left-container">
                        <div className="first-sec">
                            <p>From Saved Address</p>
                            <button className='cart-btn'>enter delivery pincode</button>
                        </div>
                        <div className="second-sec">
                            <div className="cart-image">
                                <img className='single-img' src="https://rukminim1.flixcart.com/image/416/416/jlzhci80/printer/m/f/g/canon-ts207-original-imaf8zvuejuqth5b.jpeg?q=70" alt="" />
                            </div>
                            <div className="cart-details">
                                <h5>Canon PIXMA TS207 Single Function Color Printer</h5>
                                <p>Black, Ink Cartridge</p>
                                <p>Seller:BUZZINDIA</p>
                                <p>₹2,695₹2,4997% Off2 offers applied</p>
                                <p>Out Of Stock</p>
                                <p>SAVE FOR LATER</p>
                                <p>REMOVE</p>
                            </div>
                        </div>
                        <div className='place-order'>
                            <button className='place-order-btn'>place order</button>
                        </div>
                    </div>


                    <div className="cart-right-container">
                    <div className="price-head">
                        <h3>price details</h3>
                    </div>
                    <div className="details">
                        <div className="detail1">
                        <p>price(1 item)</p>
                        <p>₹2,695</p>
                        </div>
                        <div className="detail1">
                        <p>Discount</p>
                        <p>- ₹196</p>
                        </div>
                        <div className="detail1">
                            <p>Delivery Charges</p>
                            <p>FREE</p>
                        </div>
                        <div className="detail1">
                            <p>Total Amount</p>
                            <p>₹2,499</p>
                        </div>
                        <div>You will save ₹196 on this order</div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart