import pollen from '../../img/pollen.png'
import honey from '../../img/honey.png'
import { tabTitle } from '../..';
import './featuredItems.css'
import HoneyGridItem from './HoneyGridItem';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

const Honey = ({ products }) => {
    const { t } = useTranslation();
    tabTitle(`${t("titleBar.honey")} - docteure bee`)
    const [honeyTypes, setHoneyTypes] = useState([
        {
            id: 1,
            name: t("honey.variety.spring.title"),
            priceSmall: 7,
            priceBig: 13,
            img: pollen,
            linkedId: '6K4Rr7PWhpaIpGLylOgIJG',
            desc: t("honey.variety.spring.text")
        },
        {
            id: 2,
            name: t("honey.variety.summer.title"),
            priceSmall: 7,
            priceBig: 13,
            img: honey,
            linkedId: '2MdaKn0vsZjTzTvUM9cKUd',
            desc:t("honey.variety.summer.text")
        },
        {
            id: 3,
            name: t("honey.variety.churned.title"),
            priceSmall: 7,
            priceBig: 13,
            img: honey,
            linkedId: '3Wq76egqHhO5ybWrH9rBcb',
            desc: t("honey.variety.churned.text")
        },
        {
            id: 4,
            name: t("honey.variety.fall.title"),
            priceSmall: 7,
            priceBig: 13,
            img: pollen,
            linkedId: 'wMFhZWK6vVq8fEQbCL0S1',
            desc: t("honey.variety.fall.text")
        },
        {
            id: 5,
            name: t("honey.variety.comb.title"),
            priceSmall: 7,
            priceBig: 13,
            img: honey,
            linkedId: '3KnTCHXuksCzCxzYiVQzfC',
            desc: t("honey.variety.comb.text")
        },
    ]);

  return (
  <div className='honey'>
      <div className="container">
        <div className="descCap titleLeft descTitle">honey</div>
        <div className="featuredProductTopGrid">
            <div className="imgSection">
                <div className="imgWrapper">
                    <img className='gridImage' src={pollen} alt="Honey" />
                </div>
            </div>
            <div className="featuredProductTopDesc">
                <div className="descTitle titleLeft">{ t("honey.main.title") }</div>
                <div className="descText">{ t("honey.main.text") }</div>
                <a href='#featuredHoneyProduct'><p className="callToAction">{ t("honey.main.call_to_action") }</p></a>
            </div>
        </div>
        <div id= "featuredHoneyProduct">
            <div className="descTitle"> Featured Honey</div>
            <div className="featuredProducts">
                <div className="container">
                    <div className="gridWrapper">
                        {
                            honeyTypes.map(honeyType=>(
                                <HoneyGridItem key={honeyType.id} products={products} att={honeyType} />
                            ))
                        }
                        {/* <HoneyGridItem att = {honeyType} /> */}
                        {/* <div className="gridItem">
                            <div className="imgWrapper">
                                <img className='gridImage' src={pollen} alt="Honey" />
                            </div>
                            <div className="desc descTitle">Pollen</div>
                        </div>
                        <div className="gridItem">
                            <div className="imgWrapper">
                                <img className='gridImage' src={pollen} alt="Honey" />
                            </div>
                            <div className="desc descTitle">royal jelly</div>
                        </div>
                        <div className="gridItem">
                            <div className="imgWrapper">
                                <img className='gridImage' src={propolis} alt="Honey" />
                            </div>
                            <div className="desc descTitle">propolis</div>
                        </div>
                        <div className="gridItem">
                            <div className="imgWrapper">
                                <img className='gridImage' src={pollen} alt="Honey" />
                            </div>
                            <div className="desc descTitle">immune booster</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
};

export default Honey;
