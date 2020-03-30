import React from 'react';
import Card from './Card';

const Cardlist = ({ cats }) => {

  return (
    <div>
      { 
        cats.map((user, i) => {
          return (
            <Card 
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