import React, { useState, useRef, useEffect ,useContext } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import emailjs from '@emailjs/browser';

import './Checkout.css'
import { useTranslation } from 'react-i18next';
import { ReactComponent as Master } from "../../img/master.svg";
import { ReactComponent as Paypal } from "../../img/paypal.svg";
import PayPal from './PayPal';
import MasterCard from './MasterCard';
import { CartContext } from '../Main/CartContext';
import { tabTitle } from '../..';
import { EmailJSResponseStatus, sendForm } from '@emailjs/browser';
import { Link } from 'react-router-dom';


const Checkout = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [preferedPay, setPreferedPay] = useState('payPal')
  const [cart, setCart] = useContext(CartContext);
  const [isPayed, setIsPayed] = useState(false)
  const [sdkReady, setSdkReady] = useState(false)
  const [payPalActive, setPayPalActive] = useState(false)
  const [addressValue, setAddressValue] = useState('')
  const [aboutBuy, setAboutBuy] = useState('')
  const [totalPurchase, setTotalPurchase] = useState(0)
  const [buyersEmail, setBuyersEmail] = useState('')
  const [checkoutMessage, setCheckoutMessage] = useState('')
  const form = useRef('')
  const address = useRef('')

  useEffect(() => {
    const addPayPalScript = async() =>{
      const clientId = 'AVujriXM-PhthMcqnvz-GovI9EIuHCbllGyfn28j_Pm3y-Mddo_SutvGc3V1hFOsE2txmCnzJW3cx6Dx'
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = ()=>{
        setSdkReady(true)
      }
      // document.appendChild(script)
    }
    addPayPalScript()
    
  }, [])
  
  
  let totalPrice = 0;
  cart.forEach(elt => {
      totalPrice += elt.product.fields.price 
  });


  
  const sendMail = (form) =>{
    console.log(form)
    emailjs.sendForm('service_h5wzc2p', 'docteure_bee_payment', form, 'user_32oPl5e2EBX4S9r5xcHo9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
}

  const { t } = useTranslation();
  tabTitle(`${t("titleBar.checkout")} - docteure bee`)
  
 


  const validate = () =>{
    if(firstName.length < 3){
      setPayPalActive(false)
      setCheckoutMessage(t('checkout.name_error'))
    }
    else if(lastName.length < 3){
      setPayPalActive(false)
    }
    else{
      setPayPalActive(true)
      setCheckoutMessage(t('checkout.name_valid'))
    } 
  }

  const successPaymentHandler = (paymentResult) =>{
    const payer = paymentResult.payer
    let string = ''
    let tot = 0
    let address =  `${payer.address.address_line_1} Canada`
    setAddressValue(address);
    cart.forEach(item =>{
      tot += item.product.fields.price
      string += `${item.product.fields.name} at $${item.product.fields.price} `
    })
    setTotalPurchase(tot)
    setBuyersEmail(payer.email_address)
    setAboutBuy(string)
    sendMail(form.current)
    setIsPayed(true)
 }

  return (
    <div className='checkout'>
      {
        
        !isPayed ? (
          <>
          <h2 className='descTitle'> { t("checkout.title")} </h2>{console.log(checkoutMessage)}
          <div className={`${payPalActive ? "checkoutValid": 'checkoutError' } checkoutmessage descText hideFormField`}>{checkoutMessage}</div>
        <div className="sendMessage">
          <form ref={form} className='checkName'>
            <input className='formItem' id='firstName' name='firstName' type="text" placeholder={ t("checkout.firstName") } onChange={e=>{setFirstName(e.target.value)}} value={firstName} required />
            <input className='formItem' id='lastName' name='lastName' type="text" placeholder={ t("checkout.lastName") } onChange={e=>{setLastName(e.target.value)}} value={lastName} required />
            <textarea className='hideFormField' value={addressValue} name='address' type="text"></textarea>
            <textarea className='hideFormField' value={buyersEmail} name='buyerEmail' type="text"></textarea>
            <textarea className='hideFormField' value={aboutBuy} name='requestOrder' type="text"></textarea>
            <textarea className='hideFormField' value={totalPurchase} name='totalPurchase' type="text"></textarea>
          </form>
              
              { payPalActive ?
              <div className="payPalButton">
                <PayPalButton amount={totalPrice} onSuccess = {successPaymentHandler} />
              </div>
              : (
                <>
                  <div className="togglePaymentMethod">
                    <div className="svgWrapper">
                      <Paypal onClick={(e)=>{setPreferedPay('payPal')}} className={`${preferedPay === "payPal" ? "activePay": "activePay"} payWith`} />
                    </div>
                    <div className="svgWrapper">
                      <Master onClick={(e)=>{setPreferedPay('master')}} className={`${preferedPay === "master" ? "nonActivePay": "nonActivePay"} payWith`} />
                    </div>
                  </div>
                  {
                    preferedPay === 'payPal' ? <PayPal onValidate = {validate} />: <PayPal />
                  }
              
              </>
              )
              }
              
        </div>
        </>
        ) : (
          <>
            <h1 className='descTitle success'>Thank you for ordering our product {firstName} {lastName} 😃</h1>
            {
              cart.map(item =>(
                <div className='payedProduct' key={item.product.sys.id}>
                  <div className="imgWrapper">
                    <img src={item.product.fields.productImage[0].fields.file.url} alt={item.product.fields.name} />
                  </div>
                  <div className="itemName">{item.product.fields.name}</div>
                  <div className="itemAmount">${item.product.fields.count * item.product.fields.price} for it </div>
                </div>
              ))
            }
            <Link to="/products"><p className='seeAll hyperLink'>{ t("checkout.return_to_store") }</p></Link>
          </>
        )
      }
        
    </div>
  )
}

export default Checkout 

