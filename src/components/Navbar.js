import React, { Component } from 'react';

import Nav from './Nav';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Starbar",
          }
        }
        
        handleClick(name){
        
          this.setState({
            currentPage: name
          });
    }

    render() {
        let nav = {
            display: "flex",
            listStyle: "none",
          }
      return (
        <nav class="navBar">
          <ul style={nav} class="navLinks">
            <Nav class="navLink" page="Exercise" active={this.state.currentPage} onClick={ (name) => this.handleClick(name)}/>
            <Nav class="navLink" page="Work" active={this.state.currentPage} onClick={ (name) => this.handleClick(name)}/>
            <Nav class="navLink" page="Chill" active={this.state.currentPage} onClick={ (name) => this.handleClick(name)}/>
          </ul>
        </nav>
      );
    }
  }
  
  export default Navbar;