import React from 'react';
import './styles/ProgressionBar.css';

const ProgressionBar = ({ step }) => {
  return (
    <div className="progression-bar">
      <div className="progression-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
    </div>
  );
};

export default ProgressionBar;
