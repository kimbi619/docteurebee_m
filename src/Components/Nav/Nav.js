import React, { useState, useRef, useContext } from 'react'
import { FcMenu } from 'react-icons/fc'
import { useTranslation } from "react-i18next";
import 'flag-icon-css/css/flag-icon.min.css'
import { FaSearch, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosGlobe } from 'react-icons/io'
import { AiOutlineShoppingCart } from 'react-icons/ai'


import './Nav.css';
import logo from '../../img/logo.jpg'
import { CartContext } from '../Main/CartContext';




const Nav = ({ products, handleChangeLanguage }) => {

    const [searchItems, setSearchItems] = useState([])
    const [showLang, setShowLang] = useState(false);
    const [cart, setCart] = useContext(CartContext)
    

    // toggle navigation for mobile view 
    const toggleNav = (e)=>{
        const navigation = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling;
       navigation.classList.toggle('showNav');
    }

    const [languages, setLanguages] = useState([
        {
            name: "English",
            code: 'en',
            flag: 'gb'
        },
        {
            name: "Français",
            code: 'fr',
            flag: 'fr'
        }
    ]);

    const removeNav = (e)=>{
        if(e.target.className === 'navLink'){
            e.target.parentElement.parentElement.parentElement.classList.remove('showNav')
        }
    }
    const background = useRef('')
    const searchItemList = useRef('')
    const searchField = useRef('');

    // search function to find particular item using regular expressions
    const searchProducts=(e)=>{
        const searchValue = e.target.value.toLowerCase();
        background.current.style.display="block";
        
        searchItemList.current.style.display="block";
        function filteredProducts(){
            return products.filter(product=>{
                let {description} = product.fields
                description = description.toLowerCase();
                if(description.includes(searchValue)){
                    return product.fields;
                }
                return "";

            })
        } 

        setSearchItems(filteredProducts())
    }


    const removeSearch = (e)=>{
        background.current.style.display="none";
        searchItemList.current.style.display="none";
        searchField.current.value=""
    }

    const showDropDown = (e)=>{
        // const dropDownList = e.target.nextElementSibling;
        // if(dropDownList === null){
        //     return
        // }
        // dropDownList.classList.toggle('toggleDropDown');
        
        setShowLang(!showLang)
        
    }
    const removeLangDropDown  = ()=>{
        setShowLang(false)
    }


    const { t } = useTranslation();
    
    return (
        <div className='headerWrapper'>
            <div onClick={removeLangDropDown} className={`langRemover ${showLang? 'displayShowLang': ''}`}></div>
            <div onClick={removeSearch} ref={background} className="searchBackground"></div>
            <div className="nav">
                <div className="container">
                    <div className="mobile navHeader">
                        <Link to="/" >
                            <div className="logo">
                            <img className='logoImg' src={logo} alt="logo" />
                            </div></Link>
                        <div className="search">
                            <form>
                                <input ref={searchField} onChange={event=>searchProducts(event)} type="text" className="searchInput" placeholder="search" />
                                <button type="submit" className="icon searchIcon"><FaSearch /></button>
                            </form>
                        </div>
                       

                        <div className="burgerMenu" onClick={toggleNav}>
                            <div className="menu"><FcMenu /></div>
                        </div>
                    </div> 
                </div>
            
                <div ref={searchItemList} className="searchFilter">
                    <ul>
                        {
                            searchItems.map((item, index)=>(
                                <Link key={index} to={`/product/${item.sys.id}`}> 
                                    <li onClick={removeSearch} className="searchLinks">{ item.fields.description }</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <nav onClick={removeNav}>
                    <div className="push"></div>
                    <div className="logoCaption">
                        <Link to= "/"  ><div className="logo">logo</div></Link>
                    </div>
                    <ul className="navList">
                        <Link to="/products"><li className="navLink">{t("navigation.products")}</li></Link>
                        <Link to="/winery"><li className="navLink">{t("navigation.winery")}</li></Link>
                        <Link to="/contact-us"><li className="navLink">{t("navigation.contact")}</li></Link>
                        <Link to="/about"><li className="navLink">{t("navigation.about")}</li></Link>
                    </ul>
                    <div className="desktopSearch search">
                        <form>
                            <input ref={searchField} onChange={event=>searchProducts(event)} type="text" className="searchInput" placeholder="search" />
                            <button type="submit" className="icon searchIcon"><FaSearch /></button>
                        </form>
                    </div>
                    <ul className="shiftRight">
                        <Link to="/cart"><li className="cartLink navLink">
                            <span>{t("navigation.cart")}</span>
                            <span className='cartLinkIcon'>
                                <AiOutlineShoppingCart /><span className='cartLinkItemCount'>{cart.length}</span>
                            </span>
                            </li>
                        </Link>





                        <div className="lang" id='lang'>
                            <div onClick={showDropDown} className="cont">
                                <div className="dropDown">
                                        <div className="languageMobile">Language</div>
                                        <p className=""><IoIosGlobe /></p>
                                        <span className=" dropDownIndicator"><IoIosArrowDown  /></span>
                                </div>
                            </div>
                            <div className={`dropDownList ${showLang?"toggleDropDown": ""}`}>
                                {
                                    languages.map((language, index) =>(
                                        <p onClick={(e)=> handleChangeLanguage(language.code, e)} key={index} className="dropDownItem">
                                            <span className={`flag-icon flag-icon-${language.flag}`}></span>
                                            <span className='blacktext'>{language.name}</span>
                                        </p>
                                    ))
                                }
                                
                            </div>
                        </div>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav
