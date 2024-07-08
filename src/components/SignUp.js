import React, { useState } from 'react';
import ProgressionBar from './ProgressionBar';
import './styles/SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedProficiency, setSelectedProficiency] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
  };

  const handleProficiencySelect = (level) => {
    setSelectedProficiency(level);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="sign-up">
      <div className="progress-bar">
        <ProgressionBar step={step} />
      </div>
      <h1 id="title">Sign Up</h1>
      {step === 1 && (
        <div>
          <h2 id="subTitle">What language are you starting with?</h2>
          <div className="language-options">
            {["Fr", "En", "Sp", "Ge", "Eg", "Ru", "Tu", "Ha", "Ja"].map((lang) => (
              <button
                key={lang}
                className={`lang-button lang-${lang} ${selectedLanguage === lang ? 'enlarge' : ''}`}
                onClick={() => handleLanguageSelect(lang)}
              ></button>
            ))}
          </div>
          <p>Note: At this point in development, only Spanish is offered.</p>
          <div className="button-group">
            <Link to='/backUp'><button onClick={prevStep}>Back</button></Link>
            <button 
              onClick={nextStep} 
              disabled={selectedLanguage !== "Sp"} 
              className={selectedLanguage === "Sp" ? '' : 'disabled-button'}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>What is your level of proficiency in this language?</h2>
          <div className="proficiency-options">
            {["Beginner", "Intermediate", "Advance"].map((level) => (
              <button
                key={level}
                className={`proficiency-button ${selectedProficiency === level ? 'enlarge' : ''}`}
                onClick={() => handleProficiencySelect(level)}
              >
                {level}
              </button>
            ))}
          </div>
          <div className="button-group">
            <button onClick={prevStep}>Back</button>
            <button 
              onClick={nextStep} 
              disabled={!selectedProficiency} 
              className={selectedProficiency ? '' : 'disabled-button'}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Create your account</h2>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="button-group">
            <button onClick={prevStep}>Back</button>
            <Link to="/finish">
              <button 
                disabled={!email || !password} 
                className={email && password ? '' : 'disabled-button'}
              >
                Finish
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
