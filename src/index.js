import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';


import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
// // import Backend from 'i18next-http-backend';
import translationEN from '../src/assets/locales/en/translationEN.json'
import translationFR from '../src/assets/locales/fr/translationFR.json'



const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
};


i18n
.use(initReactI18next) 
.use(LanguageDetector)
.use(HttpApi)
.init({
  supportedLngs: ['en', 'fr'],
  detection: {
    order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
    caches: ['cookie'],
  },  
  resources,
  fallbackLng: "en",
  debug: true,
  react: {useSuspense: false},
});

export const tabTitle = (title) => {
  return (document.title = title)
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
