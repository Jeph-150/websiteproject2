import React, { useState } from 'react';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa'; // Importing the arrow icon
import './styles/Translation.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Translation = () => {
  const [inputLanguage, setInputLanguage] = useState('en');
  const [outputLanguage, setOutputLanguage] = useState('es');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translateText = async () => {
    const apiKey = 'YOUR_GOOGLE_CLOUD_API_KEY'; // I did not buy the API for this project
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    try {
      const response = await axios.post(url, {
        q: inputText,
        source: inputLanguage,
        target: outputLanguage,
        format: 'text'
      });

      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
      setTranslatedText('This feature will be finalyzed in the near future');
    }
  };

  return (
    <section className='all' >
    <div className="translation-container">
      <Link to="/goBack" className="back-home">
        <FaArrowLeft size={30} style={{ color: '#4a90e2', cursor: 'pointer' }} />
      </Link>
      
      <h1>Translate Words</h1>
      <div className="translation-form">
        <div className="form-group">
          <label htmlFor="input-language">Input Language:</label>
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
          <label htmlFor="output-language">Output Language:</label>
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
          <label htmlFor="input-text">Text to Translate:</label>
          <textarea
            id="input-text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
        </div>
        <button onClick={translateText} className="translate-button">
          Translate
        </button>
      </div>
      {translatedText && (
        <div className="translated-text">
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
    </section>
  );
};

export default Translation;
