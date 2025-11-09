import React from 'react'
import './Programs.css'



const Programs = (props) => {
  
  return (
    <div className="parent" >
      <div className="card">
        <div className='top'>
            <img src={props.image} alt=" logo" />
            
        </div>


            
            <div className='center'>
                  <h3>{props.description}     <span> {props.duration}</span> </h3>
                  <h2>{props.title}</h2>
                  <div className='tag'>
                    <h4> by {props.teacher}</h4>
                    
                  </div>
            </div>



        <div className='bottom'>
          <div>
          <h3>$ {props.fees} </h3>
          
          </div>
          <button>Apply Now</button>

           
        </div>
      </div>



    
    </div>
  )
}

export default Programs
