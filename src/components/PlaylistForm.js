import React, { Component } from 'react';

class PlaylistForm extends Component{
  constructor(props){
    super(props);

    this.state = {
        artist: '',
        song: '',
        notes: ''

    }
  }

  handleArtist(event){
    this.setState({
      artist: event.target.value,
    });
  }

  handleSong(event){
    this.setState({
      song: event.target.value,
    });
  }

  handleNotes(event){
    this.setState({
      notes: event.target.value,
    });
  }

  handleAddSong(){
    this.props.add(this.state.artist, this.state.song, this.state.notes)
    this.setState({
      artist: '',
      song: '',
      notes: '',
    })
  }

  render(){

    return(
      <div className="PlaylistForm">
        <h3 className="formTitle"> Add Song </h3>
        <input type="text" placeholder="Artist" value = {this.state.ArtistorBand}
        onChange={event => this.handleArtist(event)}/>
        <br/>
        <input type="text" placeholder="Song" value={this.state.Song}
        onChange={event => this.handleSong(event)}/>
        <br/>
        <input type="text" placeholder="Notes" value={this.state.Notes}
        onChange={event => this.handleNotes(event)}/>
        <br/>
        <button className="formButton" onClick={() => this.handleAddSong()}> Add </button>
      </div>
    )
  }
}

export default PlaylistForm;