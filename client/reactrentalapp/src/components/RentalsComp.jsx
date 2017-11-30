import React, { Component } from 'react';
import SingleRental from './SingleRental';
class RentalsComp extends Component {
    render() {
        return (
            <div>
                <h2 style={{textAlign: "center"}}>These are the newest listings submitted by other users</h2>
                <hr/>
                <ul>
                    {this.props.completelist.map((elem)=>{
                        return (
                            <SingleRental singledatas={elem} key={elem.id}
                                        handleRentalEdit={this.props.handleRentalEdit}
                                        handleDeleteButton={this.props.handleDeleteButton} 
                                        />
                            )
                        })
                    }
                </ul>

            </div>

        );
    }
}

export default RentalsComp;