import Carousel from 'react-elastic-carousel';
import React, { useContext, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';


import OpenProductItem from './OpenProductItem';
import { CartContext } from '../../CartContext';
import Overlay from './Overlay';
import { tabTitle } from '../../../..';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 320, itemsToShow: 1, itemsToScroll: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 650, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 }
  ];


  const Opened = ({ isLoading, product }) => {
    
    const [cart, setCart] = useContext(CartContext)
    let medias = [];
    const popupRef  = useRef()
    const overlay  = useRef()
    const { t } = useTranslation();
    
    if (isLoading){
        return <div className="preloader"></div>
    }

    const { name, description } = product.fields 
    const addToCart = (product, e)=>{
      product.fields.priceSmall = null
      product.fields.price= product.fields.priceBig
      setCart([...cart, {product:product}]);
      // ==============display popup when add to chart is clicked=============
      popupRef.current.style.display="block";
  }
  
  const removePopup = (e)=>{
      e.target.parentElement.style.display="none";
  }
  
  const showOverlay = () => {
      // overlay.current.style.display = "block"
      overlay.current.classList.add('whow')
  }
  
  
  
  if(product.fields.productImage){
      product.fields.productImage.forEach(elt => {
          medias.push(elt.fields.file.url);
      });
  }
  
  
  

  tabTitle(`${name} - ${t("titleBar.products")} - docteure bee`)
  return (
      
  <div className='openProductPage'>
      <div className="descCap titleLeft descTitle">{name}</div>
          <div className="featuredProductTopGrid">
              <div className="">
                  <div className="imgWrapper">
                          <Carousel 
                          enableAutoPlay autoPlaySpeed={2500} 
                          breakPoints={breakPoints} 
                          alternate
                          renderPagination={({ pages, activePage, onClick }) => {
                              return (
                                  <>
                                  </>
                              )
                          }}
                          className="carouselWrapper"
                          >
                          {
                              medias.map((media, index)=>(
                                  <OpenProductItem key={index}>
                                      <div className="productPageImgWrapper">
                                          <img className={`gridImage descImage`} src={media} alt={name} />
                                      </div>
                                  </OpenProductItem>
                              ))
                          }
                      </Carousel>
                  </div>
              </div>
              <div className="featuredProductTopDesc">
                  <div className="descTitle titleLeft">Description</div>
                  <div className="descText">
                      {description}
                  </div>
                  <div className="place-oder controlLinkWrapper ">
                      <p onClick={showOverlay} className="controlLinks addToCart callToAction">{ t("other_products.add_to_cart") }</p>
                      <p onClick={(e)=>{addToCart(product,e)}} className="controlLinks callToAction">{ t("other_products.buy") }</p>
                  </div>
              </div>
          </div>

          <div ref={popupRef} className="popup">{t("product_added")}... 
              <Link to="/cart"><div> { t("go_to_cart") } </div></Link>
              <span className="closePopup" onClick={removePopup}><FaTimes /></span>
          </div>
          <div ref={overlay} className="overlayWrapper">
              <Overlay product={product} />
          </div>
      </div>

  )
}

export default Opened
