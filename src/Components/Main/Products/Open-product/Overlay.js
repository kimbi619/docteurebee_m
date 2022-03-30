import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../CartContext';
import { useTranslation } from 'react-i18next'

const Overlay = ({ product }) => {
    const [cart, setCart] = useContext(CartContext)
    const [amountBig, setAmountBig] = useState(0)
    const [amountSmall, setAmountSmall] = useState(0)
    const [total, setTotal] = useState(0)
    const removeOverlay = (e) =>{
        // e.target.parentElement.parentElement.style.display = 'none';
        e.classList.remove('whow')
    }


    const addToCart = (product, e)=>{
        if(amountSmall > 0){
            // product.fields.priceBig = null
            product.fields.price= product.fields.priceSmall * amountSmall
            product.fields.count = parseInt(amountSmall)
            setCart([...cart, {product:product}]);
        }
        if(amountBig > 0){
            // product.fields.priceSmall = null
            product.fields.count = parseInt(amountBig)
            product.fields.count = amountBig;
            product.fields.price= product.fields.priceBig * amountBig
            setCart([...cart, {product:product}]);
        }
        removeOverlay(e.target.parentElement.parentElement.parentElement);
    }
    
    
    const { t } = useTranslation();
  return (
    <div className='overlay'>
        <div onClick={(e)=>removeOverlay(e.target.parentElement.parentElement)} className="shadow"></div>
        <div className="overlayContainer">
            <div className="heading">
                <h2 className='headingOne'>{product.fields.name}</h2>
                <h2  className='headingOne'>Available forms</h2>
            </div>
            <div className="size">
                <div className="name">500g</div>
                <div className="name">${product.fields.priceSmall}</div>
                <input type="number" a={7} value={amountSmall} onChange={(e)=>setAmountSmall(e.target.value)} />
            </div>
            <div className="size">
                <div className="name">1kg</div>
                <div className="name">${product.fields.priceBig}</div>
                <input type="number" a={13} value={amountBig} onChange={(e)=>setAmountBig(e.target.value)} />
            </div>
            <p onClick={(e)=>{addToCart(product,e)}}  className="controlLinks callToAction">
                 { t("other_products.buy") }
            </p>
        </div>
    </div>
  )
}

export default Overlay