import React, { Component } from 'react';
import RentalsComp from './RentalsComp';
class Rentals extends Component {

  constructor(props) {
    super(props);
      this.state = {
            completelist: [],
            apiLoaded: false,
      }
      this.conditionalRentList = this.conditionalRentList.bind(this);
    }


    componentDidMount() {
    fetch('api/listofrentals')
        .then((response) => {
            //console.log(response);
            return response.json()
                })
                .then((fullrental)=> {
                 //console.log(fullrental, "all the rentals")
                 this.setState({
                     completelist: fullrental.rentalsData,
                     apiLoaded: true,
                    })
        })
    };


    conditionalRentList() {
        if (this.state.apiLoaded === true) {
            return <RentalsComp completelist={this.state.completelist} /> 
        }
        else {
            return <p>Loading</p>
        }
    }

    render() {
        return (
            <div className="rentalsmain">
                <div className="searchrentalsdiv">
                    <form className="searchrentalsform">
                        <input type="text" name="location" placeholder="location" />
                        <input type="text" name="description" placeholder="description" />
                        <input type="submit" value="Submit" />
                        </form>
                </div>
                <div className="listingdiv">
                    <p>Everything goes here</p>
                    {this.conditionalRentList()}
                </div>
            </div>
        )
    }
}

export default Rentals;