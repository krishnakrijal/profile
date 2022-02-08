import React from 'react';
import './intro.css';
import krijal from '../../img/krijal.jpg'

const Intro = () => {
  return <div className='i'>
      <div className="i-left">
          <div className="i-left-wrapper">
              <h2 className="i-left-intro">Hello, My Name is</h2>
              <h1 className='i-left-name'>Krijal Mangrati</h1>
              <div className="i-title">
                  <div className="i-title-wrapper">
                      <div className="i-title-item">Front-End Developer</div>
                      <div className="i-title-item">Web Developer</div>
                      <div className="i-title-item">Electronics Engineer</div>
                      <div className="i-title-item">Back-End Developer</div>
                      <div className="i-title-item">UI/UX Design</div>
                  </div>
              </div>
              <div className="i-desc">
                <p> I design and develop services for customers of all sizes, 
                    specializing in creating stylish, modern websites, 
                    web services and online stores.
                </p>
              </div>
              <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
            </svg>
          </div>
      </div>
      <div className="i-right">
          <div className="i-bg"><img src={krijal} alt='krijal' className='i-right-img'/></div>
          
      </div>
        </div>;
};

export default Intro;
