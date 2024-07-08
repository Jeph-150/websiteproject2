import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';
import multi from './images/multi.jpeg';

const HomePage = ({ children, title }) => {
  const [lessons, setLessons] = useState([
    { id: 1, title: 'Lesson 1', unlocked: true },
    { id: 2, title: 'Lesson 2', unlocked: false },
    { id: 3, title: 'Lesson 3', unlocked: false },
    { id: 4, title: 'Lesson 4', unlocked: false }
  ]);
  const [showChangeLevelMenu, setShowChangeLevelMenu] = useState(false);

  const allLessonsCompleted = lessons.every(lesson => lesson.unlocked);

  return (
    <div className="page-container">
      <header className="page-header">
        <nav className="navigation">
          <Link to="/translate" className="nav-link">Translate</Link>
          <Link to="/communicate" className="nav-link">Communicate</Link>
          <Link to="/challenge" className="nav-link">Challenge</Link>
          <Link to="/backOut"><button id="bts">Log out</button></Link>
        </nav>
        <h1 className="page-title">Let’s Learn (The language)</h1>

        {showChangeLevelMenu && (
          <div className="change-level-menu">
            {['Level 1', 'Level 2', 'Level 3'].map(level => (
              <div key={level} className="level-option">
                <h3>{level}</h3>
                <div className="lesson-buttons">
                  {lessons.map(lesson => (
                    <button
                      key={lesson.id}
                      className={`lesson-button ${lesson.unlocked ? 'unlocked' : 'locked'}`}
                      disabled={!lesson.unlocked}
                    >
                      {lesson.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </header>
      <main className="page-content">
        <h2 className="content-title">{title}</h2>
        {children}
        <div className="description">
          <p>Welcome to our language learning platform! Here, you'll start 
            with the basics and progress to more challenging lessons as you 
            advance. Each lesson must be completed to unlock the next one, 
            ensuring a gradual and structured learning experience. 
            Let's embark on this journey together and master the language step by step!</p>
        </div>
        <div className="lesson-buttons">
          {lessons.map(lesson => (
            <button
              key={lesson.id}
              className={`lesson-button ${lesson.unlocked ? 'unlocked' : 'locked'}`}
              disabled={!lesson.unlocked}
            >
              {lesson.title}
            </button>
          ))}
        </div>
        <div className="next-chapter-container">
          <button
            className="next-chapter-button"
            disabled={!allLessonsCompleted}
            title={!allLessonsCompleted ? 'Finish the lessons of this chapter' : ''}
          >
            Next Chapter
            <span className={`lock-icon ${allLessonsCompleted ? 'unlocked' : 'locked'}`}>🔒</span>
          </button>
        </div>
      </main>
      <div className="corner-image">
        <img src={multi} alt="Corner Image" />
      </div>
    </div>
  );
};

export default HomePage;
