import React, { Component } from 'react';

import Star from './Star';
class PlaylistItem extends Component {

  handleStarClick(index){
    this.props.toggleStar(index)
  }

  render() {
    const item = this.props.song
    return(

      <tr>
        <td> <Star fav={item.fave} onClick={index=>this.handleStarClick(index)}/> </td>
        <td> {item.Artist} </td>
        <td> {item.Song} </td>
        <td> {item.Notes} </td>
      </tr>
    )
  }
}

export default PlaylistItem;