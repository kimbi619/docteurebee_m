import React, { useContext, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import uuid from 'react-uuid'
import emailjs from '@emailjs/browser';
import { EmailJSResponseStatus, sendForm } from '@emailjs/browser';


import { tabTitle } from '../../..';
import { CartContext } from '../CartContext'
import CartItem from './CartItem';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isPayed, setIsPayed] = useState(false)
    const [message, setMessage] = useState('')
    
    const [buyDescription, setBuyDescription] = useState('')
    const [totalPurchase, setTotalPurchase] = useState(0)
  
    const form = useRef('')

    const onRemove=(id)=>{
        function filteredCart(){
            return cart.filter(cartI=>{
                let pid = cartI.product.sys.id;
                if(pid !== id){
                    return cartI;
                }
                return null;
    
            })
        }
        
        setCart(filteredCart())
    }
    
    let totalPrice = 0;
    const handleCartChange = (id, count) => {
        // cart.map(cartI =>{
        //     if(cartI.product.sys.id === id){
        //         cartI.product.count = count;
        //     }
        // })
    }
    
    cart.forEach(elt => {
        totalPrice += elt.product.fields.price 
    });
    
    const { t } = useTranslation();
    tabTitle(`${t("titleBar.cart")} - docteure bee`)

    const sendMail = (form) => {
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID_PAY, 'docteure_bee_payment', form, process.env.REACT_APP_EMAIL_SERVICE_ACCESS_TOKEN_PAY)
          .then((result) => {
              console.log(result.text);
              payed();
          }, (error) => {
              console.log(error.text);
          })
              
          
    }
    const payed = () => {
        setCart(cart => cart = [])
    }
    const confirmOrder = () => {
        
        let tot = 0
        let string = ''


        cart.forEach(item =>{
            tot += item.product.fields.price
            string += `${item.product.fields.name} at $${item.product.fields.price} `
        })
        setForm(tot, string)
    }
    
    function setForm(price, text){
        setTotalPurchase(price)
        setBuyDescription(text)
        setIsPayed(true)
        sendMail(form.current)
    }



    const validateAndConfirm = () =>{
        

        if(firstName.length < 3){
            setMessage('*Please fill in all fields*')
            return
        }
        else if(lastName.length < 3){
            setMessage('*Please fill in all fields*')
            return
        }
        else{
            confirmOrder()
        }
    }

    return (
        <div className="cartPageWrapper">
            { !isPayed ? (
            <>
            <div className="carts">
            {
                
                cart.length < 1 ? (
                <div className='notAvailable'>
                    <h1>{ t("cart.cart_empty") }</h1>
                </div>
                ) : (
                    cart.map(cartItem=>(
                    <div className='cartItemAvailable' key={uuid()}>
                        <CartItem onCartChange={handleCartChange} onRemove = {onRemove} product={cartItem.product} />
                    </div>
                ))
                )
            }
            </div>
            <div className="cartCheckOutSection">
                <div className="totalWrapper">
                    <h3 className="cartItemName">{ t("cart.total") }</h3>
                    <h1 className="totalPrice">${totalPrice.toFixed(2)}</h1>
                </div>
                <form ref={form} className='checkName'>
                    <input className='formItem' id='firstName' name='firstName' type="text" placeholder={ t("checkout.firstName") } onChange={e=>{setFirstName(e.target.value)}} value={firstName} required />
                    <input className='formItem' id='lastName' name='lastName' type="text" placeholder={ t("checkout.lastName") } onChange={e=>{setLastName(e.target.value)}} value={lastName} required />
                    <textarea className='hideFormField' value={buyDescription} name='requestOrder' type="text"></textarea>
                    <textarea className='hideFormField' value={totalPurchase} name='totalPurchase' type="text"></textarea>
                </form>
                <span className='fillAllFields'>{message}</span>
                <button onClick={e =>validateAndConfirm()} className={`buyBtn productPlaceOrder checkout ${cart.length < 1?"payDisable": ""}`}>{ t("cart.checkout") }</button>
            </div>
            </> 
            ) : (
            <div className='successfullPurchase'>
                <h1>Your order has successfully been placed</h1>
                <p className='purchaseTextOne'>Please head over to <span>157, Montee RenaudSt-Eustache Québec Canada </span> and collect your order</p>
                <p>or call Victoria Kuzia at <span>+1-438-992-2004</span></p>
                <h1>Thank you!</h1>
            </div>
            )
            }
        </div>
    )
}

export default Cart
