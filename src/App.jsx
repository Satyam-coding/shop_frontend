import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Register} from './pages/Register';
import {Login} from './pages/Login';
import {VerifyOtp} from './pages/VerifyOtp';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import Services from './pages/Services';
import { UpdatePassword } from './pages/UpdatePassword';
import {ForgotPassword} from './pages/ForgotPassword';
import {ResetPassword} from './pages/ResetPassword';
import SingleProduct from './pages/SingleProduct';
import Search from './components/Search';
import Cart from './pages/Cart';
import CartComp from './components/CartComp';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/otp' element={<VerifyOtp/>}/> 
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/> 
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/updatePassword' element={<UpdatePassword/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/resetPassword' element={<ResetPassword/>}/>
        <Route path='/sp' element={<SingleProduct/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cartc' element={<CartComp/>}/>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App