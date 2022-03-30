import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import pollen from '../../img/pollen.jpg'
// import honey from '../../img/honey.jpg'
// import propolis from '../../img/propolis.jpg'

const HoneyGridItem = ({ att, products }) => {
    const { t } = useTranslation(); 
    const pID = products.find(product => product.fields.name.toLowerCase() == att.name)
  return (
    <div className="gridItem">
        <div className="featuredHoneyItem">
            <div className="imgWrapper">
                <img className='gridImage' src={att.img} alt="Honey" />
            </div>
            <div className="name-title">
                <div className="honey-name descText">{att.name}</div>
                <div className="honey-price descText">${att.priceBig}</div>
            </div>
        </div>
        <div className="desc">
            <div className="descText">{att.desc}</div>
            <Link to={`/product/${pID.sys.id}`}>
                <p className="honeyItemLink callToAction">{ t("honey.place_order") }</p>
            </Link>
        </div>
    </div>
  )
};

export default HoneyGridItem;
