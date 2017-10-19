import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';
class SingleRental extends Component {
    
    render() {
        return (
            <div className="singlecomp">
                <li>{this.props.singledatas.title}</li>
                <li>{this.props.singledatas.description}</li>
                <li>Price: {this.props.singledatas.price}</li>
                <li>Bedrooms: {this.props.singledatas.bedrooms}</li>
                <li>Bathroom: {this.props.singledatas.bathrooms}</li>
                <li>City: {this.props.singledatas.city}</li>
                <li>State: {this.props.singledatas.state_id}</li>
                <li>Zipcode: {this.props.singledatas.zipcode}</li>
                <li>Parking Availability: {this.props.singledatas.parking}</li>
                <li>Pets Allowed: {this.props.singledatas.pets}</li>
                <li>Heating: {this.props.singledatas.heating}</li>
                <li>:Cooling: {this.props.singledatas.cooling}</li>
                <li>Availability date: {this.props.singledatas.availablefrom}</li>
                <li>Wifi Availability: {this.props.singledatas.wifi}</li>
                <li>Property ID: {this.props.singledatas.id}</li>
                <button onClick={()=>{this.setState({showModal:true})}}>Edit This</button>
                <button onClick={()=> {this.props.handleDeleteButton(this.props.singledatas.id)}}> Delete Listing</button>
                <Link to={`/rentals/${this.props.singledatas.id}`}>See Property Details</Link>
            </div>

        );
    }
}
export default SingleRental;