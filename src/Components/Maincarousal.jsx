import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Maincarousal.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
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



export default function Maincarousal() {
  return (
    <Carousel responsive={responsive} 
     swipeable={true}
     draggable={true}
     infinite={true}
     autoPlay={true}
     >
  <div><img className="carousal-image" src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/8c185751266273c9.jpg?q=50" alt="" /></div>
  <div><img  className="carousal-image" src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2035528d955a85ea.jpg?q=50" alt="" /></div>
  <div><img  className="carousal-image" src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/250ebb4ca1c20aeb.jpg?q=50" alt="" /></div>
  <div><img  className="carousal-image" src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/fe16f4ad42e1cd35.jpg?q=50" alt="" /></div>
  <div><img  className="carousal-image" src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/8091c39cf49a3044.jpg?q=50" alt="" /></div>
  <div><img  className="carousal-image" src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/4f7f359e00e222cd.jpg?q=50" alt="" /></div>
</Carousel>

  )
}
