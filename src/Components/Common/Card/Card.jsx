import React from 'react'

import './card.css'

const Card = ({data}) => {
    const {heading,designation, image1, image2,description} = data
  return (
    <div>
      <div className='serv-head'>
      </div>
      <div className='card-wrapper'>
        <div className='bg-img'>
       <img src={ image1}/>
       </div>

       <div className='icon-img'>
       <img src={ image2}/>

       </div>


        <h1>{heading}</h1>
        
        <p>{designation}</p>
        <h4>{description}</h4>

        <div className='profile-btn'>
        
        <button>View Profile</button>
        </div>

      </div>
    </div>
  )
}

export default Card
