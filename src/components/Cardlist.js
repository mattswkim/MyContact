import React from 'react';
import Card from './Card';

const Cardlist = ({ cats }) => {
  if (true) {
    throw new Error('Nooo!');
    }
  return (
    <div>
      { 
        cats.map((user, i) => {
          return (
            <Card 
              key={i} 
              id={cats[i].id} 
              name={cats[i].name} 
              email={cats[i].email}
            />
          );
        }) 
      }
    </div>
  );
}

export default Cardlist;