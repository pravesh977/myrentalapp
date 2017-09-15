import React, { Component } from 'react';
import rentalbackground from '../imagefolder/rentalbackground.jpg';
import Header from './Header';
import Footer from './Footer';
import Rentals from './Rentals';
import {
  Link
} from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Link to="/rentals">Rentals man</Link>
                <p>some nice pics and parallax scroll here</p>
                <img src={rentalbackground} alt="rentalimg" />
                <Footer />
            </div>
        );
    }
}


export default Home;