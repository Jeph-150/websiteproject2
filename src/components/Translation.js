import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import './styles/Translation.css';
import { Link } from 'react-router-dom'; 

const Translation = () => {
  const [inputLanguage, setInputLanguage] = useState('en');
  const [outputLanguage, setOutputLanguage] = useState('es');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isSpanish, setIsSpanish] = useState(false);

  const translations = {
    en: {
      title: 'Translate Words',
      inputLanguage: 'Input Language:',
      outputLanguage: 'Output Language:',
      textToTranslate: 'Text to Translate:',
      translateButton: 'Translate',
      translatedText: 'Translated Text:',
      featureMessage: 'This feature will be finalized in the near future.',
    },
    es: {
      title: 'Traducir Palabras',
      inputLanguage: 'Idioma de Entrada:',
      outputLanguage: 'Idioma de Salida:',
      textToTranslate: 'Texto a Traducir:',
      translateButton: 'Traducir',
      translatedText: 'Texto Traducido:',
      featureMessage: 'Esta función se finalizará en un futuro cercano.',
    },
  };

  const currentTranslation = isSpanish ? translations.es : translations.en;

  const handleLanguageToggle = () => {
    setIsSpanish(!isSpanish);
  };

  const translateText = () => {
    setTranslatedText(currentTranslation.featureMessage);
  };

  return (
    <section className='all'>
      <div className="translation-container">
        <Link to="/goBack" className="back-home">
          <FaArrowLeft size={30} style={{ color: '#4a90e2', cursor: 'pointer' }} />
        </Link>
        <button onClick={handleLanguageToggle} className="language-toggle">
          {isSpanish ? 'English' : 'Español'}
        </button>
        <h1>{currentTranslation.title}</h1>
        <div className="translation-form">
          <div className="form-group">
            <label htmlFor="input-language">{currentTranslation.inputLanguage}</label>
            <select
              id="input-language"
              value={inputLanguage}
              onChange={(e) => setInputLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="ja">Japanese</option>
              <option value="cr">Creole</option>
              <option value="ar">Arabic</option>
              <option value="tu">Turkish</option>
              <option value="ru">Russian</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="output-language">{currentTranslation.outputLanguage}</label>
            <select
              id="output-language"
              value={outputLanguage}
              onChange={(e) => setOutputLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="ja">Japanese</option>
              <option value="cr">Creole</option>
              <option value="ar">Arabic</option>
              <option value="tu">Turkish</option>
              <option value="ru">Russian</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="input-text">{currentTranslation.textToTranslate}</label>
            <textarea
              id="input-text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>
          <button onClick={translateText} className="translate-button">
            {currentTranslation.translateButton}
          </button>
        </div>
        {translatedText && (
          <div className="translated-text">
            <h2>{currentTranslation.translatedText}</h2>
            <p>{translatedText}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Translation;
