import React, { Component } from 'react';

class Rentals extends Component {
    render() {
        return (
            <div className="rentalsmain">
                <div className="searchrentalsdiv">
                    <form className="searchrentalsform">
                        <input type="text" name="location" />
                        </form>
                </div>
                <p>this is for all the rentals</p>
            </div>
        )
    }
}

export default Rentals;