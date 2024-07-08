import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './styles/Challenge.css'; // Importing the CSS file

const Challenge = () => {
  const [word, setWord] = useState('');
  const [sentence, setSentence] = useState('');
  const [trans, setTrans] = useState('');
  const [isLocked, setIsLocked] = useState(true);

  const unlockWord = () => {
    const randomWord = 'Nublado';
    const randomSentence = 'El cielo está nublado hoy.';
    const theTrans = 'The sky is cloudy today.';

    setWord(randomWord);
    setSentence(randomSentence);
    setTrans(theTrans);
    setIsLocked(false);
  };

  return (
    <div className="word-container">
      {isLocked ? (
        <button className="unlock-button" onClick={unlockWord}>Unlock Today's Word</button>
      ) : (
        <>
          <h2>Today's Word: <b>{word}</b></h2>
          <p>Sentence: {sentence}</p>
          <p>Translation: {trans}</p>
        </>
      )}
      <Link to="/goBack" className="home-button">Back to Home</Link>
    </div>
  );
};

export default Challenge;
