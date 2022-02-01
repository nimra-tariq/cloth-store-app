
import './App.css';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import About from './components/about/about';
import NavBar from './components/home/headerNavBar/navBar';
import Cart from './components/cart/addToCart';
import Products from './components/products/product';
import ProductInfo from './components/products/cards/ProductInfo';
import { Provider } from 'react-redux';
import myStore from './store/store';
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
    <NavBar></NavBar>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} /> 
      <Route path="/addToCart" element={<Cart/>} />
      <Route path='/:id' element={<ProductInfo/>}/> 
    </Routes>
    </BrowserRouter>
    </Provider>
    </div>
    <div><Footer></Footer></div>
    </>
  );
}

export default App;
