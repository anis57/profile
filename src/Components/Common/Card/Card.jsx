// import React from 'react'

// import './card.css'

// const Card = ({data}) => {
//     const {heading,designation, image1, image2,description} = data
//   return (
//     <div>
//       <div className='serv-head'>
//       </div>
//       <div className='card-wrapper'>
//         <div className='bg-img'>
//        <img src={ image1}/>
//        </div>

//        <div className='icon-img'>
//        <img src={ image2}/>

//        </div>


//         <h1>{heading}</h1>
        
//         <p>{designation}</p>
//         <h4>{description}</h4>

//         <div className='profile-btn'>
        
//         <button>View Profile</button>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Card


import "./card.css";
import "./Responsive.css";
// import { useNavigate } from "react-router";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const {
    name,
    profession,
    description,
    background,
    profileImage,
    profileLink,
    buttonText,
    id
  } = data;

  const navigator = useNavigate();
  return (
    <div className="card">
      <div
        className="img-wrapper"
        style={{ backgroundImage: `url(${background})` }}
      >
        <img className="dp" src={profileImage == null ? "/assets/Images/not_found.png" : profileImage} alt="" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6>{profession}</h6>
        <p className="card-text">{description.slice(0, 40)}...</p>
        
        <a
          href=""
          onClick={() => navigator(`/product/${id}`)}
          className="btn btn-primary card_btn"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;
