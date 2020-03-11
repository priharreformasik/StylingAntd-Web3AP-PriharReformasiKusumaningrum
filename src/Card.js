import React from 'react';
import './Card.css';

const Card = (a) => {
  return (
    <div className='UserCard'>
      <div className='UserCardTop'>
        <img alt="" src={a.pic} />
      </div>
      <div className='UserCardBottom'>
        <h3>{a.name}</h3>
        <h5>{a.email}</h5>
        <h5>{a.job}</h5>
      </div>
    </div> 
  );
}



export default Card;
