import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaWeixin, FaCode } from 'react-icons/fa';
import '../styles/BlogPage.css';

// Import all skill images
import ing1 from '../assets/images/ing-1.png';
import ing2 from '../assets/images/ing-2.png';
import ing3 from '../assets/images/ing-3.png';
import ing4 from '../assets/images/ing-4.png';
import ing5 from '../assets/images/ing-5.png';
import ing6 from '../assets/images/ing-6.png';
import ing7 from '../assets/images/ing-7.png';
import ing8 from '../assets/images/ing-8.png';
import ing9 from '../assets/images/ing-9.png';
import ing10 from '../assets/images/ing-10.png';
import ing11 from '../assets/images/ing-11.png';
import ing12 from '../assets/images/ing-12.png';
import ing13 from '../assets/images/ing-13.png';

const BlogPage = () => {
  // Array of skills with images for the horizontal slider
  const skillItems = [
    { id: 1, image: ing1, alt: 'Skill 1' },
    { id: 2, image: ing2, alt: 'Skill 2' },
    { id: 3, image: ing3, alt: 'Skill 3' },
    { id: 4, image: ing4, alt: 'Skill 4' },
    { id: 5, image: ing5, alt: 'Skill 5' },
    { id: 6, image: ing6, alt: 'Skill 6' },
    { id: 7, image: ing7, alt: 'Skill 7' },
    { id: 8, image: ing8, alt: 'Skill 8' },
    { id: 9, image: ing9, alt: 'Skill 9' },
    { id: 10, image: ing10, alt: 'Skill 10' },
    { id: 11, image: ing11, alt: 'Skill 11' },
    { id: 12, image: ing12, alt: 'Skill 12' },
    { id: 13, image: ing13, alt: 'Skill 13' }
  ];

  return (
    <div className="blog-container">
      {/* Left Intro Panel */}
      <div className="intro-panel">
        <div className="profile-section">
          <img src="/Arith.svg" alt="Umesh Air" className="profile-image" />
          <h2>Umesh Air</h2>
          <p className="title">Founder, Inbho & Full Stack Web Developer</p>
          
          <div className="social-links-vertical">
            <a href="https://github.com/umeshair" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub size={20} />
              <span className="username">umeshair</span>
            </a>
            <a href="https://linkedin.com/in/umeshair" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin size={20} />
              <span className="username">umeshair</span>
            </a>
            <a href="https://leetcode.com/umeshair" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaCode size={20} />
              <span className="username">umeshair</span>
            </a>
            <a href="https://instagram.com/umyesair" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram size={20} />
              <span className="username">umyesair</span>
            </a>
            <a href="https://facebook.com/umyesair" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebook size={20} />
              <span className="username">umyesair</span>
            </a>
            <a href="https://x.com/umyesair" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter size={20} />
              <span className="username">umyesair</span>
            </a>
            <a href="https://wechat.com/umeshair" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaWeixin size={20} />
              <span className="username">umeshair</span>
            </a>
          </div>
          
          <button className="follow-button">Follow</button>
        </div>
      </div>
      
      {/* Right Content Area */}
      <div className="blog-content">
        <div className="bio-section">
          <h3>About Me</h3>
          <p>
            <strong>I am Umesh Air</strong>, a dedicated full-stack web developer from the Far Western region of Nepal. 
            I completed my high school education at Learning Realm International (LRI) School, located in Kalanki, Kathmandu. 
          </p>
          <p>
            My journey into programming began in <strong>January 2022</strong>, and since then, I've specialized in <strong>MERN stack development</strong> 
            (MongoDB, Express.js, React, Node.js), learning through platforms like freeCodeCamp, W3Schools, and various 
            open-source resources.
          </p>
          <p>
            In January 2025, I founded <strong>Inbho</strong>, a tech initiative focused on building innovative and impactful digital solutions. 
            As the founder, I am driven by a passion for technology, continuous learning, and contributing to the global 
            developer community.
          </p>
        </div>
        
        <div className="image-slider-section">
          <h3>My Skills</h3>
          <div className="image-slider">
            <div className="slider-track">
              {/* Duplicate the skills to create an infinite loop effect */}
              {[...skillItems, ...skillItems].map((skill, index) => (
                <div 
                  key={`${skill.id}-${index}`} 
                  className="slide"
                >
                  <div className="slide-content">
                    <img 
                      src={skill.image} 
                      alt={skill.alt} 
                      className="skill-image" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;