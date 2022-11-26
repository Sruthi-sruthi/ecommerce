// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
// import Product from './Components/Product';
import Productitem from './Components/Productitem';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Product from './Components/Product';
import Cart from './Components/Cart';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
