import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Fashionproduct.css'
import Product from "./Product";

function Fashionproduct(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <>
        <div className="fashion-products">
            <div className="fashion">
                <h2 className='txt2'>Fashion Brands<br />
                on Discounts</h2>
                <div className="view-btn">
                    <button className='view'>view all</button>
                </div>
                <div className="fashion-image">
                </div>
            </div>
          
        <div className="sub-carousal">
        <Carousel responsive={responsive} 
    //  swipeable={true}
     draggable={true}
     infinite={false}
     autoPlay={false}
     >
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/krkyt8w0/shoe/u/l/c/10-lto40-10-adidas-originals-ftwwht-cwhite-amblus-original-imag5cgk7amv6bgu.jpeg?q=70" title="adidas originals,wrogn.." price="40-80% off" description="men's sneakers,high tops.."/>
    <Product productimage="https://rukminim1.flixcart.com/fk-p-flap/200/200/image/25a8213998239bf4.jpg?q=70" title="woodland,crocs&more" price="50-80% off" description="men's shoes,sandals&more"/>
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/kwpam4w0/jean/k/t/h/32-praw21jn0109a-provogue-original-imag9bpyy6crrjsz.jpeg?q=70" title="metroanut,provogue..." price="under 499/-" description="lowest prices ever!!"/>
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/xif0q/shoe/a/s/c/-original-imaghgnn9xffzw8g.jpeg?q=70" title="HRX by hrithik roshan,slazeng.." price="60-90% off" description="men's sports shoes,slides.."/>
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/kw2fki80/jacket/r/5/u/-original-imag8tvnshdpgwfz.jpeg?q=70" title="provogue,billion&more" price="under 899/-" description="men's winterwear"/>
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/koudfgw0/hand-messenger-bag/y/w/a/amalka-satchel-medium-coral-slamamdcor-satchel-caprese-original-imaehgzdrrcauchj.jpeg?q=70" title="Lavie,caprese,baggit and more" price="min 75 % off" description="top deals on handbags"/>
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/xif0q/t-shirt/5/k/w/-original-imaghhfyyrwc74me.jpeg?q=70" title="Roadster,HRX, by hrithik roshan" price="min 60 % off" description="men's Tshirts,shirts & more"/>
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/krce64w0/top/f/l/b/xl-14208176-here-now-original-imag55hvxmanpsjg.jpeg?q=70" title="metronanut" price="min 70 % off" description="dresses,tops & more"/>

  
    
</Carousel>

            </div> 

        </div>
        </>
    )
}
export default Fashionproduct