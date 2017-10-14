import React, { Component } from 'react';
import './App.css';

//import components
import Navbar from './components/Navbar';
import PlaylistForm from './components/PlaylistForm';
import Playlist from './components/Playlist';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
      playlist: [{
        "Artist": "Vitamin C",
        "Song": "(Graduation song) Friends Forever",
        "Notes": "classic graduation song",
        "fave": false,
      }, {
        "Artist": "Matchbox Twenty",
        "Song": "Unwell",
        "Notes": "best for emo days",
        "fave": true,
      },
      {
        "Artist": "N'Sync",
        "Song": "Bye, Bye, Bye",
        "Notes": "always have to do the dance moves",
        "fave": false,
      },]
    }
  }
  addNewItem(user, artist, song, notes){
    let item = {
      "Artist": artist,
      "Song": song,
      "Notes": notes,
      "fave": false,
    }
    let updatedList = this.state.playlist.slice();
        updatedList.push(item);
        this.setState({
          playlist: updatedList
        });
  }
  toggleFavorite(index){ 
    let clickedSong = this.state.playlist[index];

    let updatedSong = this.state.playlist.slice(index, index + 1)
    if (updatedSong[0].favorite === false){
        updatedSong[0].favorite = true;

    } else if (updatedSong[0].favorite===true){
        updatedSong[0].favorite = false;
    }
    let switchedSong = this.state.playlist.slice();
    this.setState({
      playlist: switchedSong
    })
  }

  handleSearch(event){
    this.setState({
      text: event,
    })
    console.log(this.state.text)
  }

  render() {

    let playlistItems = this.state.playlist.map(items => items );
    if (this.state.text === ''){
      return(
        <div className="App">
          <div className="App-header">
          </div>
          <div>
            <Navbar />
          </div>

          <div className="main">
            <PlaylistForm playlist={playlistItems} add={(user, artist, song, notes) => this.addNewItem(user, artist, song, notes)}/>
            <Playlist items={playlistItems}
            toggleStar={index=> this.toggleFavorite(index)}
            handleSearch={event => this.handleSearch(event)}/>
          </div>
          </div>
      )
    } else {
      let playlistItems = this.state.playlist.filter(item => item.Song.includes( this.state.text)).map(items => items);

      return (
        <div className="App">
          <div className="App-header">
          </div>
          <div>
            <Navbar />
          </div>

          <div className="main">
            <PlaylistForm playlist={playlistItems} add={(user, artist, song, notes) => this.addNewItem(user, artist, song, notes)}/>

            <Playlist items={playlistItems}
            toggleStar={ index => this.toggleFavorite(index)}
            handleSearch={event => this.handleSearch(event)}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
