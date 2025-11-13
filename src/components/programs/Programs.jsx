import React from 'react';
import './Programs.css';

const Programs = (props) => {
  const handleApply = () => {
    alert(`Application submitted for ${props.title}! We'll contact you soon.`);
  };

  return (
<<<<<<< HEAD
    <div className="card">
      <div className='top'>
        <img src={props.image} alt={props.title} />
      </div>
=======
    

    <div className="parent" >
      <div className="card">
        <div className='top'>
            <img src={props.image} alt=" logo" />
            
        </div>
>>>>>>> 350fe56d753e391ac4c39a342b1e5e3eb2eb484f

      <div className='center'>
        <h3>{props.description} <span>{props.duration}</span></h3>
        <h2>{props.title}</h2>
        <div className='tag'>
          <h4>by {props.teacher}</h4>
          <h4>{props.level}</h4>
          <h4>⭐ {props.rating}</h4>
        </div>
      </div>

      <div className='bottom'>
        <div>
          <h3>{props.fees}</h3>
        </div>
        <button onClick={handleApply}>Apply Now</button>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
    
  )
>>>>>>> 350fe56d753e391ac4c39a342b1e5e3eb2eb484f
}

export default Programs;