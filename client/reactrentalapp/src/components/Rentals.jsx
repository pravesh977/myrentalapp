import React, { Component } from 'react';

class Rentals extends Component {


    componentDidMount() {
    fetch('api/listofrentals')
        .then((response) => {
            //console.log(response);
            return response.json()
                })
                .then((fullrental)=> {
                 console.log(fullrental, "all the rentals")
        })
    };

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
                    <ul>

                    </ul>
                </div>
            </div>
        )
    }
}

export default Rentals;