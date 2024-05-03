
import './App.css';
import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Dashboard from './pages/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import ContactUs from './pages/contact/ContactUs';
import SpicyFood from '../src/components/catgory/SpicyFood';
import SpicyScreen from './components/SpicyScreen';
import BengaliThali from './components/catgory/BengaliThali';
import ThaliScreen from './components/ThaliScreen';
import SweetDesert from './components/catgory/SweetDesert';
import DesertScreen from './components/DesertScreen';
import CartScreen from './components/CartScreen';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginScreen from './components/LoginScreen';


function App() {
  return (
    <div class="wrapper">
      <BrowserRouter>
      <Header/>
      <Menu/>
      
      <Routes>
    
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/spicy" element={<SpicyFood />} />
      <Route path="/products/:id" element={<SpicyScreen />} />
      <Route path="/product2/:id" element={<ThaliScreen />} />
      <Route path="/product3/:id" element={<DesertScreen />} />
      <Route path="/cart" element={<CartScreen/>} />
      {/* <Route path="/cart/products/:id" element={<CartScreen />} /> */}
      <Route path="/thali" element={<BengaliThali />} />
      <Route path="/desert" element={<SweetDesert />} />
      <Route path="/login" element={<LoginScreen />} />
      </Routes>
      <Footer/>
      <ToastContainer position="top-center" autoClose={3000} />
      </BrowserRouter>
    </div>
  );
}

export default App;
