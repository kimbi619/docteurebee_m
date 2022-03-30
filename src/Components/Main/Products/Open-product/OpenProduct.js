import React, {useEffect, useState } from 'react'
import i18next from 'i18next';
import { useParams } from 'react-router-dom';


import './OpenProduct.css';
import UseLocalStorage from '../../../../UseLocalStorage'
import { Client } from '../../../../Client';
import Opened from './Opened';




  
const OpenedProduct = (props) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = UseLocalStorage('products', {})
  const [product, setProduct] = UseLocalStorage('product', {})

  const { id } = useParams();
    useEffect( () => { 
      setLoading(true); 
      let currentLang = i18next.language
      Client.getEntry(id, {locale: currentLang === 'fr' ? 'fr': 'en-US'})
      .then(res=>{
        setProduct(res);
        setLoading(false);
      })
      .catch(err=>console.log(err))
      
    }, []);
    


    


   
    return (
      <>
      {/* <h1>This page works</h1> */}
        <Opened isLoading={loading} product={product} />
      </>
    )
}

export default OpenedProduct
