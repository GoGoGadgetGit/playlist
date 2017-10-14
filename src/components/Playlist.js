import React, { Component } from 'react';

//import playlist item
import PlaylistItem from './PlaylistItem';
import SearchBar from './SearchBar';


class Playlist extends Component {
  handleStarClick(index){
    this.props.toggleStar(index)
  }
  handleSearch(event){
    this.props.handleSearch(event);
  }

  render(){

    let items = this.props.items.map((item, index)=> <PlaylistItem key={index} song={item} toggleStar={ () => this.props.toggleStar(index)}/>);


    return(
      <div className="playlistTable">
      <SearchBar handleSearch={event => this.props.handleSearch(event)}/>
      <table>
        <tbody>
          <tr>
            <th> </th>
            <th>Artist</th>
            <th>Song</th>
            <th>Notes</th>
          </tr>

          {items}

        </tbody>
      </table>
      </div>
    )
  }
}

export default Playlist;