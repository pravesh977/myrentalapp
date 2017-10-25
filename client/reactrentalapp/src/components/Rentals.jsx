import React, { Component } from 'react';
import RentalsComp from './RentalsComp';
import AddListingForm from './AddListingForm';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
class Rentals extends Component {

  constructor(props) {
    super(props);
      this.state = {
            completelist: [],
            apiLoaded: false,
            showModal: false,
            inputTitleValue: '',
            inputDescriptionValue: '',
            inputPriceValue: '',
            inputBedroomsValue: '',
            inputBathroomsValue: '',
            inputCityValue: '',
            inputStateIdValue: '',
            inputZipcodeValue: '',
            inputParkingValue: '',
            inputPetsValue: '',
            inputHeatingValue: '',
            inputCoolingValue: '',
            inputAvailablefromValue: '',
            inputWifiValue: ''
      }
      this.conditionalRentList = this.conditionalRentList.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.handleListingSubmit = this.handleListingSubmit.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      this.handleBedroomsChange = this.handleBedroomsChange.bind(this);
      this.handleBathroomsChange = this.handleBathroomsChange.bind(this);
      this.handleCityChange = this.handleCityChange.bind(this);
      this.handleStateIdChange = this.handleStateIdChange.bind(this);
      this.handleZipcodeChange = this.handleZipcodeChange.bind(this);
      this.handleParkingChange = this.handleParkingChange.bind(this);
      this.handlePetsChange = this.handlePetsChange.bind(this);
      this.handleHeatingChange = this.handleHeatingChange.bind(this);
      this.handleCoolingChange = this.handleCoolingChange.bind(this);
      this.handleAvailablefromChange = this.handleAvailablefromChange.bind(this);
      this.handleWifiChange = this.handleWifiChange.bind(this);
      this.handleDeleteButton = this.handleDeleteButton.bind(this);
      this.fetchAllRentals = this.fetchAllRentals.bind(this);
    }

    handleTitleChange(event) {
        this.setState({inputTitleValue: event.target.value});
        console.log("changing")
    }

    handleDescriptionChange(event) {
        this.setState({inputDescriptionValue: event.target.value});
        console.log("descr")
    }

    handlePriceChange(event) {
        this.setState({inputPriceValue: event.target.value});
        console.log("this is priceyyyy")
    }

    handleBedroomsChange(event) {
        this.setState({inputBedroomsValue: event.target.value});
    }

    handleBathroomsChange(event) {
        this.setState({inputBathroomsValue: event.target.value});
    }

    handleCityChange(event) {
        this.setState({inputCityValue: event.target.value});
    }

    handleStateIdChange(event) {
        this.setState({inputStateIdValue: event.target.value});
    }

    handleZipcodeChange(event) {
        this.setState({inputZipcodeValue: event.target.value});
    }

    handleParkingChange(event) {
        this.setState({inputParkingValue: event.target.value});
    }

    handlePetsChange(event) {
        this.setState({inputPetsValue: event.target.value});
    }

    handleHeatingChange(event) {
        this.setState({inputHeatingValue: event.target.value});
    }
    
    handleCoolingChange(event) {
        this.setState({inputCoolingValue: event.target.value});
    }

    handleAvailablefromChange(event) {
        this.setState({inputAvailablefromValue: event.target.value});
    }

    handleWifiChange(event) {
        this.setState({inputWifiValue: event.target.value});
        console.log("this is wifi")
    }

    closeModal() {
    this.setState({ showModal: false });
    }

    openModal() {
    this.setState({ showModal: true });
    }

    componentDidMount() {
        this.fetchAllRentals();
        };

    fetchAllRentals() {
        fetch('api/listofrentals')
        .then((response) => {
            //console.log(response);
            return response.json()
                })
                .then((fullrental)=> {
                 //console.log(fullrental, "all the rentals")
                //  this.setState({
                //      completelist: fullrental.rentalsData,
                //      apiLoaded: true,
                //     })
                this.setState((prevState)=>{ 
                    return {
                        completelist: fullrental.rentalsData,
                        apiLoaded: true,
                    }
                })
            })
    }

    conditionalRentList() {
        if (this.state.apiLoaded === true) {
            return <RentalsComp 
                        completelist={this.state.completelist} 
                        handleDeleteButton={this.handleDeleteButton}/> 
        }
        else {
            return <p>Loading</p>
        }
    }

    handleListingSubmit(event) {
        event.preventDefault();
        fetch('api/listofrentals', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: event.target.title.value,
                description: event.target.description.value,
                bedrooms: event.target.bedrooms.value,
                bathrooms: event.target.bathrooms.value,
                city: event.target.city.value,
                state_id: event.target.state_id.value,
                zipcode: event.target.zipcode.value,
                parking: event.target.parking.value,
                pets: event.target.pets.value,
                heating: event.target.heating.value,
                cooling: event.target.cooling.value,
                availablefrom: event.target.availablefrom.value,
                price: event.target.price.value,
                wifi: event.target.wifi.value,
            }),
        }).then((response) => {
      return response.json()
    })
     .then((responseJson) => {
         console.log(responseJson)
      if (responseJson.jsonAfterAdding.id !== undefined) {
        const newRental = {
          title: responseJson.jsonAfterAdding.title,
          description: responseJson.jsonAfterAdding.description,
          bedrooms: responseJson.jsonAfterAdding.bedrooms,
          bathrooms: responseJson.jsonAfterAdding.bathrooms,
          city: responseJson.jsonAfterAdding.city,
          state_id: responseJson.jsonAfterAdding.state_id,
          zipcode: responseJson.jsonAfterAdding.zipcode,
          parking: responseJson.jsonAfterAdding.parking,
          pets: responseJson.jsonAfterAdding.pets,
          heating: responseJson.jsonAfterAdding.heating,
          cooling: responseJson.jsonAfterAdding.cooling,
          availablefrom: responseJson.jsonAfterAdding.availablefrom,
          price: responseJson.jsonAfterAdding.price,
          wifi: responseJson.jsonAfterAdding.wifi,
          id: responseJson.jsonAfterAdding.id,
        }
        this.setState((prevState) => {
            return {
            completelist: prevState.completelist.concat(newRental),
            inputTitleValue: '',
            inputDescriptionValue: '',
            inputPriceValue: '',
            inputBedroomsValue: '',
            inputBathroomsValue: '',
            inputCityValue: '',
            inputStateIdValue: '',
            inputZipcodeValue: '',
            inputParkingValue: '',
            inputPetsValue: '',
            inputHeatingValue: '',
            inputCoolingValue: '',
            inputAvailablefromValue: '',
            inputWifiValue: ''
            } 
        })
        {
        this.closeModal();
        }
      } else {
        console.log('error');
      }
    })
    }

    handleDeleteButton(idToBeDeleted) {
        fetch(`api/listofrentals/${idToBeDeleted}`, {
            method: 'DELETE'
        }).then((resp)=>{
            if (resp.status===200) {
                this.fetchAllRentals();
            }
        })
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
                    <Button
                            bsStyle="primary"
                            bsSize="large"
                            onClick={this.openModal}
                            >
                            Create a Listing
                        </Button>
                    {this.conditionalRentList()}     
                </div>

            <Modal show={this.state.showModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Text in a modal</h4>
                <hr />
                <AddListingForm 
                    handleListingSubmit={this.handleListingSubmit}
                    inputTitleValue={this.state.inputTitleValue}
                    inputDescriptionValue={this.state.inputDescriptionValue}
                    inputPriceValue={this.state.inputPriceValue}
                    inputBedroomsValue={this.state.inputBedroomsValue}
                    inputBathroomsValue={this.state.inputBathroomsValue}
                    inputCityValue={this.state.inputCityValue}
                    inputStateIdValue={this.state.inputStateIdValue}
                    inputZipcodeValue={this.state.inputZipcodeValue}
                    inputParkingValue={this.state.inputParkingValue}
                    inputPetsValue={this.state.inputPetsValue}
                    inputHeatingValue={this.state.inputHeatingValue}
                    inputCoolingValue={this.state.inputCoolingValue}
                    inputAvailablefromValue={this.state.inputAvailablefromValue}
                    inputWifiValue={this.state.inputWifiValue}

                    handleTitleChange={this.handleTitleChange}
                    handleDescriptionChange={this.handleDescriptionChange}
                    handlePriceChange={this.handlePriceChange}
                    handleBedroomsChange={this.handleBedroomsChange}
                    handleBathroomsChange={this.handleBathroomsChange}
                    handleCityChange={this.handleCityChange}
                    handleStateIdChange={this.handleStateIdChange}
                    handleZipcodeChange={this.handleZipcodeChange}
                    handleParkingChange={this.handleParkingChange}
                    handlePetsChange={this.handlePetsChange}
                    handleHeatingChange={this.handleHeatingChange}
                    handleCoolingChange={this.handleCoolingChange}
                    handleAvailablefromChange={this.handleAvailablefromChange}
                    handleWifiChange={this.handleWifiChange}
                    />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.closeModal}>Close</Button>
            </Modal.Footer>
            </Modal>
        </div>
        )
    }
}

export default Rentals;