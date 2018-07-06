import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MainText from './components/MainText';
import ImageContainer from './components/ImageContainer';
import './App.css';

class App extends Component {
  render() {
    const { hikeInfo, onAddCurrentHike } = this.props;
    return (
      <div className="App">
        <Navbar />
        <MainText />
        <ImageContainer
          hikeInfo={hikeInfo}
          onAddCurrentHike={onAddCurrentHike}
        />
      </div>
    );
  }
}

export default App;
