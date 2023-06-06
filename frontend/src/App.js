
import './App.css';
import React from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Seller from './components/Seller';
import AddProduct from './components/addProduct';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DelettProduct';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seller">
            <Route path="" element={<Seller />} />
            <Route path="update/:id" element={<AddProduct />} />
            <Route path="add" element={<UpdateProduct/>} />
            <Route path='delete/:id' element={<DeleteProduct/>}/>
          </Route>
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </div>
  );
}

export default App;
