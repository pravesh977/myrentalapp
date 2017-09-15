import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Rentals from './components/Rentals';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="mainappdiv">
         <Router>
            <div>
              <nav className="mainnav">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/about">About</Link></li>  
                </ul>
              </nav>
              <div className="clearingdiv"></div>
              <main>
                {/*Routes should always be created at the upper most branch, then imported wherever needed with the <Link> tag */}
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/rentals" component={Rentals} />
              </main>             
            </div>           
        </Router>
      </div>
    );
  }
}

export default App;
