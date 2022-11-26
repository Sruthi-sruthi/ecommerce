import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import './ProductList.css'
function ProductList(){
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
        <div className="products">
            <div className="electronics">
                <h2 className='txt1'>best of <br />
                 electronics</h2>
                <div className="view-btn">
                    <button className='view'>view all</button>
                </div>
                <div className="elec-image">
                </div>
            </div>
          
        <div className="sub-carousal">
        <Carousel responsive={responsive} 
    //  swipeable={true}
     draggable={true}
     infinite={false}
     autoPlay={false}
     >
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/jpwxxu80/external-hard-drive/hdd/r/f/s/wd-wdbu6y0015bbk-wesn-original-imafcfqyjdue4hpf.jpeg?q=70" title="WD 1.5 TB Wired External Hard" price="just 3999" description="3,898"/>
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/camera/c/h/h/sony-cyber-shot-dsc-h300-advance-point-and-shoot-original-imadpzjmc3hwsnf7.jpeg?q=70" title="Top 20 Cameras" price="25249" description="Canon,Nikon&more"/>
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/l5iid8w0/printer/l/z/7/-original-imagg6cmyt9yfvta.jpeg?q=70" title="Top Rated Printers" price="From 2199" description="Canon,HP&more"/>
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/kkfrjww0/monitor/k/y/u/gw2780-na-benq-original-imafzs3hhv2wtcsd.jpeg?q=70" title="UltraWide Monitores" price="From 12499" description="Samsung,Acer,LG & more"/>
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/kjym9ow0/pulse-oximeter/f/5/a/usa-model-210-fingertip-oxy-meter-finger-oxygen-saturation-heart-original-imafzezxypg3mtep.jpeg?q=70" title="Best of Pulse Oximeters" price="From 499" description="Dr,Trust,Microtek&more"/>
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/kbgu1e80/cases-covers/back-cover/n/5/s/qrioh-586gf-glxi141-original-imafssgwwtddmavq.jpeg?q=70" title="Premium Back Covers" price="Extra 15% off" description="From Qrioh,DailyObjects &more"/>
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/k4u7i4w0/cases-covers/back-cover/p/y/g/adi-creations-adi-jan2020-b401-original-imafnngmez7hgykq.jpeg?q=70" title="Designer Cases & Covers" price="From 99" description="For all top models"/>
    <Product productimage="https://rukminim1.flixcart.com/image/200/200/kr2e3680/pendrive/type-a-to-type-c/6/v/4/dual-drive-go-upto-150mb-s-sandisk-original-imag4xq5nm4uddzz.jpeg?q=70" title="Pendrives" price="From 339" description="SanDisk dual drive Go 64 GB"/>
  
    
</Carousel>

            </div> 

        </div>
        </>
    )
}
export default ProductList