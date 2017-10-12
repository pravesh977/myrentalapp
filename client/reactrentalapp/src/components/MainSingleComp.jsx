import React, { Component } from 'react';
class MainSingleComp extends Component {
    render() {
        return (
            <div>
                <li>{this.props.singleData.title}</li>
                <li>{this.props.singleData.description}</li>
                <li>Price: {this.props.singleData.price}</li>
                <li>Bedrooms: {this.props.singleData.bedrooms}</li>
                <li>Bathroom: {this.props.singleData.bathrooms}</li>
                <li>City: {this.props.singleData.city}</li>
                <li>State: {this.props.singleData.state_id}</li>
                <li>Zipcode: {this.props.singleData.zipcode}</li>
                <li>Pets Allowed: {this.props.singleData.pets}</li>
                <li>Heating: {this.props.singleData.heating}</li>
                <li>:Cooling: {this.props.singleData.cooling}</li>
                <li>Availability date: {this.props.singleData.availablefrom}</li>
                <li>Wifi Availability: {this.props.singleData.wifi}</li>
                <li>Property ID: {this.props.singleData.id}</li>
                {/*{console.log(this.props.singleData.title, "this works")}*/}
            </div>

        );
    }
}

export default MainSingleComp;