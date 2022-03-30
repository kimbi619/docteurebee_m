import victoriaFarming from '../img/victoriaFarming.jpg'


import YouTube from 'react-youtube';
import { useTranslation } from 'react-i18next';
import { tabTitle } from '..';

const opts = {
    // height: '390',
    // width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


const About = () => {
    const { t } = useTranslation();
    tabTitle(`${t("titleBar.about")} - docteure bee`)
  return (
  <div className='about-page'>
    <div className="container">
        <div className="aboutFlexContainer">
            <div className="imgSection">
                <div className="imgWrapper victoriaImgWrapper">
                    <img className='gridImage victoriaImg' src={victoriaFarming} alt="Honey" />
                </div>
            </div>
            <div className="aboutTextSection">
                <div className="descTitle titleLeft">{t("aboutpage.title")}</div>
                <div className="descText">{ t("aboutpage.text") }</div>

                {/* <div className="aboutTextSection"> */}
                <div className="descText">{ t("aboutpage.text_two") }</div >
                <div className="descText">{ t("aboutpage.text_three") }</div>
            {/* </div> */}
            </div>
        </div>


        <div className="aboutFlexContainer">
            
            <div className="imgSection">
                <div className="imgWrapper">
                    <YouTube className='youtube' videoId="3QQ3vz0eiL0" opts={opts} />
                </div>
            </div>
        </div>
        </div>
  </div>
  )
};

export default About;
