import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return(
  <div className='footerWrapper'>
      <div className="container">
        <div className="footerContent">
          <div className="about">
              <div className="descTitle">{ t("footer.about.title") }</div>
              <Link to="/"><div className="descText">{ t("footer.about.who_we_are") }</div></Link>
              <Link to="/"><div className="descText">{ t("footer.about.what_we_do") }</div></Link>
              <Link to="/"><div className="descText"><AiOutlinePhone /> Tell</div></Link>
              <a href="mailto:victoriakuzia@gmail.com"><div className="descText">
                <AiOutlineMail /> { t("footer.about.email_us") }</div></a>
          </div>
          <div className="buy">
              <div className="descTitle">{t('footer.buy.title')}</div>
              <Link to="/products"><div className="descText">{t('footer.buy.store')}</div></Link>
              <Link to="/"><div className="descText"> {t('footer.buy.privacy')} </div></Link>
              <Link to="/contact-us"><div className="descText"> {t('footer.buy.stories')} </div></Link>
              <Link to="/about"><div className="descText"> {t('footer.buy.stories')}</div></Link>
              <Link to="/contact-us"><div className="descText"> {t('footer.buy.help')} </div></Link>

          </div>
          <div className="others">
              <div className="descTitle">{t('footer.others.title')}</div>
              <Link to="/contact-us"><div className="descText"> {t('footer.others.faq')} </div></Link>
              <Link to="/contact-us"><div className="descText"> {t('footer.others.report_errors')} </div></Link>
              <Link to="/#lang"><div className="descText"> {t('footer.others.language')} </div></Link>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Footer;
