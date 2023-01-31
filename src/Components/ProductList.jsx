import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getProductByCategory } from "../services/api";
import Product from "./Product";
import './ProductList.css'
function ProductList(props) {
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

  let [categoryProducts, setCategoryProducts] = useState([])
  async function fetchProductByCategory() {
    let response = await getProductByCategory(props.category)
    // console.log(response, props.category);
    console.log(response.getcategory[0]);
    setCategoryProducts(response.getcategory)
  }
  useEffect(() => {
    fetchProductByCategory()
  }, [])



  return (
    <>
      <div className="products">
        <div className="electronics">
          <h2 className='txt1'>best of <br />
            {props.category}</h2>
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
            {
              categoryProducts.length !==0 && categoryProducts.map((oneproduct)=>{
                console.log(oneproduct);
                return(
                  <Product oneproduct={oneproduct} />
                )
              })
            }
            

          </Carousel>

        </div>

      </div>
    </>
  )
}
export default ProductList