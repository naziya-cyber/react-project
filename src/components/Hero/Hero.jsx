import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToPrograms = () => {
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="hero container" id="home">
      <div className='hero-text'>
        <h1>We Ensure Better Education for a Better World</h1>
        <p>Transform your career with our comprehensive courses taught by industry experts. Learn at your own pace and unlock your potential with hands-on projects and real-world experience.</p>
        <button className='btn' onClick={scrollToPrograms}>Explore more</button>
      </div>
    </div>
  );
}

export default Hero;