import React from 'react';

const Card = ({
    name,
    email,
    id
  }) => {
  
  return (
    <div className='tc b--pink-30 dib br3 pa3 ma3 grow bw2 shadow-5'>
      <img alt='cats' src={`https://robohash.org/${name}?set=set4&size=200x200`}></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;