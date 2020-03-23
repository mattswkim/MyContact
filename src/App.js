import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { cats } from './cats';


class App extends Component {
  constructor() {
    super()
    this.state = {
      cats: cats,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    const filteredCats = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
  }

  render () {
    return (
      <div className='tc bg-washed-green ma4'>
        <h1>My Cat Friends Contact</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Cardlist cats={this.state.cats}/>
      </div>
    );
  }
}

export default App;