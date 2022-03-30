import React from 'react'
import { Link } from 'react-router-dom'
import honey from '../../img/honey.png'
import pollen from '../../img/pollen.png'
import propolis from '../../img/propolis.png'
import royalJelly from '../../img/royalJelly.png'
import hydromel from '../../img/hydromel.png'
// import Legend from './Legend'

import { useTranslation } from 'react-i18next'
import YouTube from 'react-youtube';
import { tabTitle } from '../..'


const HomePage = () => {

    const opts = {
        // height: '390',
        // width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const { t } = useTranslation();
      tabTitle('docteure bee')
    return (
        <div className='homepage'>
            <div className="heroSection">
                <div className="container">
                    <h1>{t("homepage.heroSection.heroText")}</h1>
                    <Link to='/products'><p className="callToAction">{t("homepage.heroSection.callToAction")}</p></Link>                 
                </div>
            </div>
            {/* <Legend /> */}
            <div className="siteDesc">
                <h2 className="descTitle">{t("description")}</h2>
                <p className="descText">{t("homepage.site_description.text")}</p>
                <div className="descText">
                    <Link to="/contact-us"><p className='hyperLink'>{t("homepage.site_description.connect")}</p></Link>
                </div>
            </div>

            <div className="featuredProducts">
                <h2 className="descTitle">{ t("homepage.featuredProduct.title") }</h2>
                <div className="container">
                    <div className="gridWrapper">
                        <div className="gridItem">
                            <Link to="/honey">
                                <div className="imgWrapper">
                                    <img className='gridImage' src={honey} alt="Honey" />
                                </div>
                                <div className="desc descTitle">{ t("homepage.featuredProduct.name.honey") }</div>
                            </Link>
                        </div>
                        <div className="gridItem">
                            <Link to="/pollen">
                                <div className="imgWrapper">
                                    <img className='gridImage' src={pollen} alt="Honey" />
                                </div>
                                <div className="desc descTitle">{ t("homepage.featuredProduct.name.pollen") }</div>
                            </Link>
                        </div>
                        <div className="gridItem">
                            <Link to="/royal-jelly">
                                <div className="imgWrapper">
                                    <img className='gridImage' src={royalJelly} alt="Honey" />
                                </div>
                                <div className="desc descTitle">{ t("homepage.featuredProduct.name.royal_jelly") }</div>
                            </Link>
                        </div>
                        <div className="gridItem">
                            <Link to="/propolis">
                                <div className="imgWrapper">
                                    <img className='gridImage' src={propolis} alt="Honey" />
                                </div>
                                <div className="desc descTitle">{ t("homepage.featuredProduct.name.propolis") }</div>
                            </Link>
                        </div>
                        <div className="gridItem">
                            <Link to="/immune-booster">
                                <div className="imgWrapper">
                                    <img className='gridImage' src={pollen} alt="Honey" />
                                </div>
                                <div className="desc descTitle">{ t("homepage.featuredProduct.name.immune_booster") }</div>
                            </Link>
                        </div>
                        <div className="gridItem">
                            <Link to="/hydromel">
                                <div className="imgWrapper">
                                    <img className='gridImage' src={hydromel} alt="Honey" />
                                </div>
                                <div className="desc descTitle">{ t("homepage.featuredProduct.name.hydromel") }</div>
                            </Link>
                        </div>
                    </div>
                    <Link to="/products"><p className='seeAll hyperLink'>{ t("homepage.featuredProduct.see_product_list") }</p></Link>
                </div>
            </div>

            
            <div className="container characteristics">
                <div className="featuredProductTopGrid">
                    <div className="imgSection">
                        <div className="imgWrapper">
                            <YouTube className='youtube' videoId="VyL8QfQBHFw" opts={opts} />
                        </div>
                    </div>
                    <div className="featuredProductTopDesc">
                        <div className="descTitle titleLeft">{t("homepage.video.title")}</div>
                        <div className="descText">{t("homepage.video.text")}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
