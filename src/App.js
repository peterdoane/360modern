import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import LogoHeader from './LogoHeader'
import ImageGallery from 'react-image-gallery';
import Section from './Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LogoHeader />
        <ImageGallery
          slideInterval={2000}
          autoPlay
          items={[{
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }]}
        />
        <Section backgroundUrl="http://360modern.com/wp-content/themes/360-redux/_assets/images/bg-topmiddle.jpg">HeyHeyHey</Section>
      </div>
    );
  }
}


export default App;
