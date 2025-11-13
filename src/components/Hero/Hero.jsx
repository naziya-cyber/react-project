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
<<<<<<< HEAD
    <div className="hero container" id="home">
      <div className='hero-text'>
        <h1>We Ensure Better Education for a Better World</h1>
        <p>Transform your career with our comprehensive courses taught by industry experts. Learn at your own pace and unlock your potential with hands-on projects and real-world experience.</p>
        <button className='btn' onClick={scrollToPrograms}>Explore more</button>
=======
    <div className="hero ">
      <div className='hero-text'>
        <h1>We Ensure the better education for the better world</h1>
        <p>Join with us to BRIGHT YOUR FUTURE and enroll in courses like python, java, operation system and many more and do excel in your career </p>
        <button className='btn'> Explore more </button>
>>>>>>> 350fe56d753e391ac4c39a342b1e5e3eb2eb484f
      </div>
    </div>
  );
}

export default Hero;