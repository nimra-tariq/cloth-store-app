
import './App.css';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import About from './components/about/about';
import NavBar from './components/home/headerNavBar/navBar';
import Cart from './components/cart/cart';
import Products from './components/products/product';
import ProductInfo from './components/products/cards/ProductInfo';
import CheckOut from './components/checkOut/checkOut';
import { Provider } from 'react-redux';
import myStore from './store/store';
import PlaceOrder from './components/checkOut/placeOrder/placeOrder'
import SignIn from './components/signInForm/signIn';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <>
      <div className="App">
        <Provider store={myStore}>
          <BrowserRouter>
          <div className='allButFooter'>
            <NavBar></NavBar>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/addToCart" element={<Cart />} />
              <Route path='/:id' element={<ProductInfo />} />
              <Route path='/checkOut' element={<CheckOut />}></Route>
              <Route path='/placeOrder' element={<PlaceOrder />}></Route>
              <Route path='/signIn' element={<SignIn />}></Route>
            </Routes>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
      <div><Footer></Footer></div>
    </>
  );
}

export default App;
