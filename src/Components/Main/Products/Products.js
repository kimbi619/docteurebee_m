import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product'
import { FaTimes } from 'react-icons/fa'
import { CartContext } from '../CartContext';
import { useTranslation } from 'react-i18next';
import { tabTitle } from '../../..';


const Products = ({ products }) => {
    const [cart, setCart] = useContext(CartContext)
    const popupRef  = useRef()
    const addToCart = (product, e)=>{
        product.fields.priceSmall = null
        product.fields.price= product.fields.priceBig
        product.fields.count = 1;
        let totalPrice = product.fields.price
        product.fields.totalPrice = totalPrice;
        setCart([...cart, {product:product}]);
        // ==============display popup when add to chart is clicked=============
        popupRef.current.style.display="block";
    }

    // remove the popup alert from display
    const removePopup = (e)=>{
        e.target.parentElement.style.display="none";
    }

    const { t } = useTranslation();
    tabTitle(`${t("titleBar.products")} - docteure bee`)
    return (
        <div className="productGridWrapper">
            {
                products.map((product, index)=>(
                    // <Product product={product} key={product.sys.id} />
                    <div  key={product.sys.id}>
                            <div className="productItemWrapper">
                                <Link to={`/product/${product.sys.id}`}> 
                                    <div className="productImgWrapper">
                                        {product.fields.productImage &&
                                        <img className="productImg skeleton"
                                        src={product.fields.productImage[0].fields.file.url} alt={product.fields.name} />}
                                    </div>
                                 </Link>
                                <Product onAdd={addToCart} product={product} />
                            </div>
                    </div>
                    ))  
                }
                
                <div ref={popupRef} className="popup">{t("product_added")}... 
                    <Link to="/cart"><div> { t("go_to_cart") } </div></Link>
                    <span className="closePopup" onClick={removePopup}><FaTimes /></span>
                </div>
        </div>
    )
}

export default Products
