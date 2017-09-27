import React, { Component } from 'react';
// import Header from './Header';
// import Footer from './Footer';
import MainSingleComp from './MainSingleComp';
class Idpage extends Component {
    
    constructor(props) {
        super(props);
            this.state = {
            singleData: [],
            apiLoaded: false
        }
    }

    componentDidMount() {
        //fetch('./../api/listofrentals/2')
        fetch(`/api/listofrentals/${this.props.match.params.propertyid}`)
            .then((response)=>{
                //console.log(response)
                return response.json()
            })
            .then((singlerent)=>{
                //console.log(singlerent)
                this.setState({
                    singleData: singlerent.rentalsData,
                    apiLoaded: true
                })
            })
        }

    conditionalSingleRent() {
        if(this.state.apiLoaded === true) {
            return <MainSingleComp singleData={this.state.singleData} />
        }
        else {
            return <p>Loading....</p>
        }
    }
    render() {
        return (
            <div>
                <p>this is the id page solo</p>
                <p>{this.props.match.params.propertyid}</p>
                {this.conditionalSingleRent()}
            </div>

        );
    }
}

export default Idpage;