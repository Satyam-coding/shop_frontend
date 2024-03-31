import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer} from 'react-toastify';
import AuthProvider from './Provider/AuthProvider.jsx';
import Service_API_Provider from './Provider/Service_API_Provider.jsx';
import { CartProvider } from './Provider/CartProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
    <Service_API_Provider>
    <CartProvider>
    <App />
    </CartProvider>
    </Service_API_Provider>
    </AuthProvider>
    <ToastContainer/>
  </>,
) 