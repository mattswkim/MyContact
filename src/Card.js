import React from 'react';

const Card = ({
    name,
    email,
    id
  }) => {
  
  return (
    <div className='tc bg-washed-blue dib br3 pa3 mr3 grow bw2 shadow-5'>
      <img alt='cats' src={`https://robohash.org/${id}?set=set4&size=200x200`}></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;