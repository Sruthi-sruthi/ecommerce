// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
// import Product from './Components/Product';
import Productitem from './Components/Productitem';
import {BrowserRouter,Route,Routes,} from 'react-router-dom'
import Product from './Components/Product';
import Cart from './Components/Cart';
import { DemoContext } from './context/DemoContext';
import { useState } from 'react';
import { useMemo } from 'react';
import { AuthProvider, UserContext } from './context/UserContext';
import SellerLogin from './Components/Seller/SellerLogin';
import SellerSignup from './Components/Seller/SellerSignup';
import SellerHomePage from './Components/Seller/SellerHomePage';
import AddProductPage from './Components/Seller/AddProductPage';
import SellerRoute from './Components/AuthRoutes/SellerRoute';

function App() {
  // const [demo,setdemo] = useState("hy")


  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/productitem' element={<Productitem/>}/>
      
      <Route path='/seller'>
        <Route path='' exact element={<SellerRoute><SellerHomePage/></SellerRoute>}></Route>
        <Route path='addproduct' element={<SellerRoute><AddProductPage/></SellerRoute>}></Route>
        <Route path='login' element={<SellerLogin/>}></Route>
        <Route path='signup' element={<SellerSignup/>}></Route>
      </Route>

    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
