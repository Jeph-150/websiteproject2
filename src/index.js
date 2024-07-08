import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import Translation from './components/Translation';
import Communicate from './components/Communicate';
import Challenge from './components/Challenge';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/backUp' element={<LandingPage/>}/>
      <Route path='/log' element={<HomePage/>}/>
      <Route path='/finish' element={<HomePage/>}/>
      <Route path='/translate' element={<Translation/>}/>
      <Route path='/goBack' element={<HomePage/>}/>
      <Route path='/backOut' element={<LandingPage/>}/>
      <Route path='/communicate' element={<Communicate/>}/>
      <Route path='/challenge' element={<Challenge/>}/>

    </Routes>
  </Router>,
  document.getElementById('root')
);