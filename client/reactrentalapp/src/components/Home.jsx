import React, { Component } from 'react';
import rentalbackground from '../imagefolder/rentalbackground.jpg';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <p>some nice pics and parallax scroll here</p>
                <img src={rentalbackground} alt="rentalimg" />
                <Footer />
            </div>
        );
    }
}


export default Home;