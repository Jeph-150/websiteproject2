import React from 'react';
import './styles/LandingPage.css';
import '../App.css';
import { Link } from 'react-router-dom';
import instagram from './images/instagram.png';
import facebook from './images/facebook.png';
import tiktok from './images/tik-tok.png';

function App() {
  return (
    <div>
      <NavBar />
      <Intro />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

const NavBar = () => {
  return (
    <nav className="navbar fixed-top bg-body-tertiary">
      <div className="logo">Etemenanki</div>
      <div className="nav-items">
        <Link to='/login'><button className="yellow-button">Login</button></Link>
        <Link to="/signUp"><button className="yellow-button">Sign Up</button></Link>
      </div>
    </nav>
  );
};

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-container">
        <div className="language-buttons">
          <div className="lang-left">
            <button className="lang-button lang-Fr"></button>
            <button className="lang-button lang-En"></button>
          </div>
          <div className="lang-mid">
            <button className="lang-button lang-Sp"></button>
            <button className="lang-button lang-Ge"></button>
            <button className="lang-button lang-Eg"></button>
          </div>
          <div className="lang-right">
            <button className="lang-button lang-Ru"></button>
            <button className="lang-button yellow-button">More...</button>
          </div>
        </div>
        <div className="column-right">
          <h1>Master a New Language</h1>
          <h2>Interactive and Fun Learning!</h2>
          <p>
            Etemenanki is a cutting-edge language learning platform designed to help users embark on their journey of learning new languages. Offering level-based courses and interactive lessons, Etemenanki ensures a gradual and effective learning experience, empowering users to achieve their language goals efficiently.
          </p>
          <Link to="/signUp"><button className="s-Up yellow-button">Sign Up</button></Link>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section className="about" id="about-us">
      <div className="aboutUs">
        <h1 id="AU-title">3 Fun Facts About Being Multilingual</h1>
        <div className="aboutUs-container">
          <div className="para">
            <p>Being multilingual can enhance your cognitive abilities, improving memory, problem-solving skills, and even delaying the onset of dementia.</p>
          </div>
          <div className="para">
            <p>Learning multiple languages opens up a world of cultural experiences, allowing you to connect with people from diverse backgrounds.</p>
          </div>
          <div className="para">
            <p>Multilingualism can boost your career opportunities, as many employers value employees who can communicate in different languages.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What Our Students Say</h1>
      <div className="testimonial-container">
        <div className="testimonial">
          <p>"Taking Spanish classes here has been a fantastic experience! The instructors are amazing."</p>
          <span>- Reece Mays</span>
        </div>
        <div className="testimonial">
          <p>"I highly recommend these classes to anyone looking to learn a new language."</p>
          <span>- Rose Brennan</span>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Contact Us</a>
        </div>
        <div className="footer-center">
          <div className="social-icons">
            <a href="#"><img src={instagram} alt="Instagram" /></a>
            <a href="#"><img src={facebook} alt="Facebook" /></a>
            <a href="#"><img src={tiktok} alt="TikTok" /></a>
          </div>
          <p>&copy; 2024 Etemenanki Language Learning. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <p>Address: 123 Language St, Learning City, LC 45678</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: etemenanki_language@hotmail.com</p>
          <p>Monday to Friday: 10am - 9pm</p>
        </div>
      </div>
    </footer>
  );
};

export default App;
