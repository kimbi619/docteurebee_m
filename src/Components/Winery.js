import React from 'react';
import { useTranslation } from 'react-i18next';
import { tabTitle } from '..';

const Winery = () => {
    
  const { t } = useTranslation();
  tabTitle(`${t("titleBar.winery")} - docteure bee`)
  return(
    <div className='winery'>
        <div className="container">
          <div className='notAvailable'>
            <h1>{ t("winery.not_found") }</h1>
          </div>
        </div>
  </div>
  )
};

export default Winery;
