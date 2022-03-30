import './App.css'
import { useEffect } from 'react'
import { Client } from './Client'
import Main from './Components/Main/Main'
import Nav from './Components/Nav/Nav'
import { Route, Routes } from 'react-router'
import useLocalStorage from './UseLocalStorage'
import HomePage from './Components/Home/HomePage'
import Contact from './Components/Contact'
import About from './Components/About'
import Footer from './Components/Footer/Footer'
import Honey from './Components/FeaturedProducts/Honey'
import OtherMainProduct from './Components/FeaturedProducts/OtherMainProduct'
import Winery from './Components/Winery'

import i18next from 'i18next'
import Checkout from './Components/Checkout/Checkout'
import { CartContextProvider } from './Components/Main/CartContext'
import { tabTitle } from '.'

function App() {
  tabTitle('docteure bee')

  const changeLanguage = (lang, e) => {
    i18next.changeLanguage(lang)
    e.target.parentElement.classList.add('hideLang')
  }
  const [products, setProducts] = useLocalStorage('products', [])

  const fetchData = async () => {
    let currentLang = i18next.language
    const res = await Client.getEntries({
      locale: currentLang === 'fr' ? 'fr' : 'en-US',
    })

    setProducts(res.items)
    // .catch(err=>console.log(err))
  }
  useEffect(() => {
    fetchData()
  }, [])

  i18next.on('languageChanged', () => {
    window.location.reload()
  })

  return (
    <div className="App">
      <CartContextProvider>
        <Nav handleChangeLanguage={changeLanguage} products={products} />
        <div className='mainAppWrapper'>
          <Main products={products} />

          <Routes>
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/winery' element={<Winery />} />
            <Route path='/pollen' element={<OtherMainProduct />} />
            <Route path='/hydromel' element={<OtherMainProduct />} />
            <Route path='/propolis' element={<OtherMainProduct />} />
            <Route path='/royal-jelly' element={<OtherMainProduct />} />
            <Route path='/immune-booster' element={<OtherMainProduct />} />
            <Route path='/honey'element={<Honey products={products} />} />
            <Route path='/cart/checkout' element={<Checkout />} />
            <Route path='/' exact element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </CartContextProvider>
      
    </div>
  );
}

export default App;
