import React, { Component } from 'react';
import './App.css';
import Rentals from './components/Rentals';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Idpage from './components/Idpage';

import {
  BrowserRouter as Router,
  Route,
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
                <Route exact path="/rentals" component={Rentals} />
                <Route path="/rentals/:propertyid" component={Idpage} />
                {/*When you visit /rentals/anything, you will get to Idpage component*/}
              </main>             
            </div>           
        </Router>
      </div>
    );
  }
}

export default App;
