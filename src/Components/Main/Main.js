import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Cart from './Cart/Cart';
import './Main.css';
import OpenProduct from './Products/Open-product/OpenProduct';
import Products from './Products/Products'

const Main = ({ products,  handleChangeLanguage })=> {
    
    return (
        <div>
            <div className="container">
                <Routes>
                    <Route path='/product/:id' element={<OpenProduct />} />
                    <Route path="/products"  element={<Products products={products}  />} />
                    <Route path="/cart" exact element={<Cart />} />
                </Routes>
            </div>
        </div>
    )
}

export default Main;
