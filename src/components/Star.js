import React, { Component } from 'react';

class Star extends Component {


  handleMouseClick(){
    this.props.onClick(this.props.fav)
  }

  render(){
    if (this.props.fav === false){
      return(
        <span className="star" onClick={event=> this.handleMouseClick()} > &#9734; </span>
      )
    }

    if (this.props.fav === true){
      return(
        <span className="star" onClick={event=> this.handleMouseClick()}> &#9733; </span>
      )
    }
  }

}

export default Star;