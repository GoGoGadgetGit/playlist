import React, { Component } from 'react';


class Nav extends Component {
    handleOnClick(){
        this.props.onClick(this.props.page)
      }

    render() {
        let nav = null;
        if(this.props.active !== this.props.page){
          nav = {
            color: "black"
          }
        }
    
        if(this.props.active === this.props.page){
          nav = {
            color: "red"
          }
        }

      return (
        <li onClick={()=> this.handleOnClick()} style={nav}>{this.props.page}</li>
      );
    }
  }
  
  export default Nav;