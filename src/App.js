import React from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { cats } from './cats';



const App = () => {
  return (
    <div className='tc'>
      <h1>My Cat Friends Contact</h1>
      <SearchBox />
      <Cardlist cats={cats}/>
    </div>
  );
}

export default App;