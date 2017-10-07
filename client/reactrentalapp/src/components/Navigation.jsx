import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

class Navigation extends Component {

render() {
    return (
         <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        {/*<a href="#">React-Bootstrap</a>*/}
        <Link to="/">Nepali Roommates</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {/*<Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="/contact">Contact</NavItem>
        <NavItem eventKey={3} href="badass">Link</NavItem>
           
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>*/}
      <Nav pullRight>
         <li><Link to="/">Sign In</Link></li>
         <li><Link to="/contact">Contact</Link></li>
         <li><Link to="/about">About</Link></li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
}
 
    // render() {
    //     return (
    //         <div>
    //             <nav className="mainnav">
    //                 <ul>
    //                     <li><Link to="/">Home</Link></li>
    //                     <li><Link to="/contact">Contact</Link></li>
    //                     <li><Link to="/about">About</Link></li>  
    //                 </ul>
    //             </nav>
    //         </div>
    //         );
    // }
}

export default Navigation;
