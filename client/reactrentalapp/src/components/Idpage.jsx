import React, { Component } from 'react';
// import Header from './Header';
// import Footer from './Footer';
class Idpage extends Component {

    componentDidMount() {
        fetch('./../api/listofrentals/2')
        //fetch('api/listofrentals/2')
            .then((response)=>{
                console.log(response)
                return response.json()
            })
            .then((singlerent)=>{
                console.log(singlerent)
            })
    }


    render() {
        return (
            <div>
                <p>this is the id page solo</p>
                <p>{this.props.match.params.propertyid}</p>
            </div>

        );
    }
}

export default Idpage;