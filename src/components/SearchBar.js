import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: ''
    }
  }

  handleTyping(event){
    this.setState({
      text: event.target.value,
    })
    this.props.handleSearch(event.target.value);
  }

  render(){
    return(
      <div className="searchbar">
        <input type="text" placeholder="Search..." value={this.state.text}
        onChange={ event => this.handleTyping(event)}/>
      </div>

    )
  }
}

export default SearchBar;