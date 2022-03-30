import React, {useState, useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { tabTitle } from '../..';
import pollen from '../../img/pollen.png'
import propolis from '../../img/propolis.png'
import useLocalStorage from '../../UseLocalStorage';
import { CartContext } from '../Main/CartContext';

const OtherMainProduct = (props) => {
 const { t } = useTranslation(); 
 const [cart, setCart] = useContext(CartContext)
 const [products, setProducts] = useLocalStorage('products', [])
  const [mainProducts, setMainProducts] = useState(
    [
      {
        route: "royal-jelly",
        name: t("other_products.royal_jelly.title"),
        desc: t("other_products.royal_jelly.text"),
        priceSmall: 7,
        priceSmall: 7,
        img: pollen,
        linkId: 'vgPQsef3RDDh9Awo3e3GN',
      },
      {
        route: "propolis",
        name: t("other_products.propolis.title"),
        desc: t("other_products.propolis.text"),
        priceSmall: 7,
        priceSmall: 7,
        img: propolis,
        linkId: '5Nul2VFxFqOo6j328wiLVP',
      },
      {
        route: "pollen",
        name: t("other_products.pollen.title"),
        desc: t("other_products.pollen.text"),
        priceSmall: 7,
        priceSmall: 7,
        img: pollen,
        linkId: '3F4JeaoLFfHd4FteFlVxaG',
      },
      {
        route: "hydromel",
        name: t("other_products.hydromel.title"),
        desc: t("other_products.hydromel.text"),
        priceSmall: 7,
        priceSmall: 7,
        img: pollen,
        linkId: 'ZhQLnEEsyWoxMC268Xkgb',
      },
      {
        route: "immune-booster",
        name: t("other_products.immune_booster.title"),
        desc: t("other_products.immune_booster.text"),
        priceSmall: 7,
        priceSmall: 7,
        img: pollen,
        linkId: '5QKvRfZwTez5rdNpY7mS4u',
      },
    ]
    );


  const loc = useLocation();
  const pname = loc.pathname
  const route =  pname.replace('/', '')
  const item = mainProducts.filter(mainProduct=>mainProduct.route === route)

  tabTitle(`${t("titleBar.products")} - ${item[0].name} - docteure bee`)


  return (
  <div>
    <div className="container">
    <div className="descCap titleLeft descTitle">{item[0].name}</div>
        <div className="featuredProductTopGrid">
            <div className="imgSection">
                <div className="imgWrapper">
                    <img className='gridImage' src={item[0].img} alt="Honey" />
                </div>
            </div>
            <div className="featuredProductTopDesc">
                <div className="descTitle titleLeft">Description</div>
                <div className="descText">
                    {item[0].desc}
                </div>
                <div className="place-oder controlLinkWrapper ">
                  <a className='controlLinks' href={`product/${item[0].linkId}`}><p className="addToCart callToAction">get this product</p></a>
                </div>
            </div>
        </div>
        </div>
  </div>
  )
};

export default OtherMainProduct;
