import './App.css';
import Home from './Components/Home';
import Productitem from './Components/Productitem';
import {BrowserRouter,Route,Routes,} from 'react-router-dom'
import Cart from './Components/Cart';
import { AuthProvider, UserContext } from './context/UserContext';
import SellerLogin from './Components/Seller/SellerLogin';
import SellerSignup from './Components/Seller/SellerSignup';
import SellerHomePage from './Components/Seller/SellerHomePage';
import AddProductPage from './Components/Seller/AddProductPage';
import SellerRoute from './Components/AuthRoutes/SellerRoute';
import SellerProductList from './Components/Seller/SellerProductList';
import SingleSellerProduct from './Components/Seller/SingleSellerProduct';
import UpdateProduct from './Components/Seller/UpdateProduct';
import Buynowform from './Components/Buynowform';
import UserRoute from './Components/AuthRoutes/UserRoute';
import Login from './Components/Login';
import OrderedProduct from './Components/OrderedProduct';
import ViewOrders from './Components/Seller/ViewOrders';
import Placeorderform from './Components/Placeorderform';

function App() {
  // const [demo,setdemo] = useState("hy")


  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/productitem' element={<Productitem/>}/>
      <Route path='/buynow' element={<Buynowform/>}/>
      <Route path='/orderedproduct' element={<OrderedProduct/>}/>
      <Route path='/placeorder' element={<Placeorderform/>}/>

      
      <Route path='/seller'>
        {/* <Route path='' exact element={<SellerRoute><SellerHomePage/></SellerRoute>}></Route>   */}
        <Route path='' exact element={<SellerHomePage/>}></Route>
        <Route path='addproduct' element={<SellerRoute><AddProductPage/></SellerRoute>}></Route>
        <Route path='login' element={<SellerLogin/>}></Route>
        <Route path='signup' element={<SellerSignup/>}></Route>
        <Route path='sellerproduct' element={<SellerRoute><SellerProductList/></SellerRoute>}></Route>
        <Route path='singlesellerproduct/:id' element={<SellerRoute><SingleSellerProduct/></SellerRoute>}></Route>
        <Route path='updateproduct' element={<SellerRoute><UpdateProduct/></SellerRoute>}></Route>
        <Route path='vieworder' element={<SellerRoute><ViewOrders/></SellerRoute>}></Route>
      </Route>

    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
