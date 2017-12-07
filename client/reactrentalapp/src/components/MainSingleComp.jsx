import React, { Component } from 'react';
class MainSingleComp extends Component {
    render() {
        return (
            <div className="mainsingleid">
                <li className="titleclass">{this.props.singleData.title}</li><br/>
                <li className="descriptionclass">{this.props.singleData.description}</li>
                <img src={this.props.singleData.imageurl} alt={this.props.singleData.title} />
                <li>Price: ${this.props.singleData.price}</li>
                <div className="rentalicons">
                    <li><i className="fa fa-bed" aria-hidden="true"></i> {this.props.singleData.bedrooms}</li>
                    <li><i className="fa fa-bath" aria-hidden="true"></i> {this.props.singleData.bathrooms}</li>
                </div>
                <li>City: {this.props.singleData.city}</li>
                {/* <li>State: {this.props.singleData.state_id}</li> */}
                <li>State: {this.props.singleData.states}</li>
                <li>Zipcode: {this.props.singleData.zipcode}</li>
                <div className="rentalfeatures">
                    <li>Parking Availability <i className="fa fa-car" aria-hidden="true"></i>: {this.props.singleData.parking}</li>
                    <li>Pets Allowed<i className="fa fa-paw" aria-hidden="true"></i>: {this.props.singleData.pets}</li>
                    <li>Heating: {this.props.singleData.heating}</li>
                    <li>Cooling: {this.props.singleData.cooling}</li>
                    <li>Wifi Availability<i className="fa fa-wifi" aria-hidden="true"></i>: {this.props.singleData.wifi}</li>
                </div>
                <li>Availability date: {this.props.singleData.availablefrom}</li>
                <li>Property ID: {this.props.singleData.id}</li>
                {/* {console.log(this.props.singleData.title, "this works")} */}
            </div>

        );
    }
}

export default MainSingleComp;