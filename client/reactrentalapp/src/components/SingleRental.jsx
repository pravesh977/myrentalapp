import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';
class SingleRental extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            inputTitleValue: this.props.singledatas.title,
            inputDescriptionValue: this.props.singledatas.description,
            inputImageUrl: this.props.singledatas.imageurl,
            inputPriceValue: this.props.singledatas.price,
            inputBedroomsValue: this.props.singledatas.bedrooms,
            inputBathroomsValue: this.props.singledatas.bathrooms,
            inputCityValue: this.props.singledatas.city,
            inputStateIdValue: this.props.singledatas.state_id,
            inputZipcodeValue: this.props.singledatas.zipcode,
            inputParkingValue: this.props.singledatas.parking,
            inputPetsValue: this.props.singledatas.pets,
            inputHeatingValue: this.props.singledatas.heating,
            inputCoolingValue: this.props.singledatas.cooling,
            inputAvailablefromValue: this.props.singledatas.availablefrom,
            inputWifiValue: this.props.singledatas.wifi,
        }
        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        //this.handleRentalEdit = this.handleRentalEdit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
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
    }

    handleTitleChange(event) {
        this.setState({inputTitleValue: event.target.value});
        //console.log("changing")
    }

    handleDescriptionChange(event) {
        this.setState({inputDescriptionValue: event.target.value});
        //console.log("descr")
    }

    handleImageUrlChange(event) {
        this.setState({inputImageUrl: event.target.value});
        //console.log("changing image")
    }

    handlePriceChange(event) {
        this.setState({inputPriceValue: event.target.value});
        //console.log("this is priceyyyy")
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
        //console.log("this is wifi")
    }

  closeEditModal() {
    this.setState({ showModal: false });
  };

  openEditModal() {
    this.setState({ showModal: true });
  };

 
    render() {
        return (
            <div>
                <Modal show={this.state.showModal} onHide={this.closeEditModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        <hr />

                        <h4>Overflowing text to show scroll behavior</h4>
                        <form onSubmit={(event) => {this.props.handleRentalEdit(event)
                                                    {this.closeEditModal()}
                                                }} >
                            <label>Title: *</label><br/><input type="text" name="title" value={this.state.inputTitleValue} placeholder="Title" onChange={this.handleTitleChange} pattern=".{20,144}" required title="20 to 144 characters" /><br/>
                            <label>Description: *</label><br/><textarea name="description" value={this.state.inputDescriptionValue} onChange={this.handleDescriptionChange} placeholder="Description of the property" pattern=".{20,500}" required title="20 to 500 characters" /><br/>
                            <label>Image Url: *</label><br/><input type="text" name="imageurl" value={this.state.inputImageUrl} placeholder="Image Url" onChange={this.handleImageUrlChange}/><br/>
                            <label>Bedrooms: </label><br/><select name="bedrooms" value={this.state.inputBedroomsValue} onChange={this.handleBedroomsChange}>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">5 +</option>
                                                            </select><br/>
                            <label>Bathrooms: </label><br/><select name="bathrooms" value={this.state.inputBathroomsValue} onChange={this.handleBathroomsChange}>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">5 +</option>
                                                            </select><br/>
                            <label>City: *</label><br/><input type="text" name="city" value={this.state.inputCityValue} onChange={this.handleCityChange} placeholder="Elmhurst" required/><br/>
                            <label>State: *</label><br/><select name="state_id" value={this.state.inputStateIdValue} onChange={this.handleStateIdChange} required>
                                                                <option value="1">Alabama</option>
                                                                <option value="2">Alaska</option>
                                                                <option value="3">Arizona</option>
                                                                <option value="4">Arkansas</option>
                                                                <option value="5">California</option>
                                                                <option value="6">Colorado</option>
                                                                <option value="7">Connecticut</option>
                                                                <option value="8">Delaware</option>
                                                                <option value="9">Florida</option>
                                                                <option value="10">Georgia</option>
                                                                <option value="11">Hawaii</option>
                                                                <option value="12">Idaho</option>
                                                                <option value="13">Illinois</option>
                                                                <option value="14">Indiana</option>
                                                                <option value="15">Iowa</option>
                                                                <option value="16">Kansas</option>
                                                                <option value="17">Kentucky</option>
                                                                <option value="18">Louisiana</option>
                                                                <option value="19">Maine</option>
                                                                <option value="20">Maryland</option>
                                                                <option value="21">Massachusetts</option>
                                                                <option value="22">Michigan</option>
                                                                <option value="23">Minnesota</option>
                                                                <option value="24">Mississippi</option>
                                                                <option value="25">Missouri</option>
                                                                <option value="26">Montana</option>
                                                                <option value="27">Nebraska</option>
                                                                <option value="28">Nevada</option>
                                                                <option value="29">New Hampshire</option>
                                                                <option value="30">New Jersey</option>
                                                                <option value="31">New Mexico</option>
                                                                <option value="32">New York</option>
                                                                <option value="33">North Carolina</option>
                                                                <option value="34">North Dakota</option>
                                                                <option value="35">Ohio</option>
                                                                <option value="36">Oklahoma</option>
                                                                <option value="37">Oregon</option>
                                                                <option value="38">Pennsylvania</option>
                                                                <option value="39">Rhode Island</option>
                                                                <option value="40">South Carolina</option>
                                                                <option value="41">South Dakota</option>
                                                                <option value="42">Tennessee</option>
                                                                <option value="43">Texas</option>
                                                                <option value="44">Utah</option>
                                                                <option value="45">Vermont</option>
                                                                <option value="46">Virginia</option>
                                                                <option value="47">Washington</option>
                                                                <option value="48">West Virginia</option>
                                                                <option value="49">Wisconsin</option>
                                                                <option value="50">Wyoming</option>
                                                            </select><br/>
                            <label>Zipcode: </label><br/><input type="text" name="zipcode" value={this.state.inputZipcodeValue} onChange={this.handleZipcodeChange} placeholder="Zipcode" /><br/>
                            {/*<label>Pets: *</label><br/><input type="text" name="pets" value={this.props.inputPetsValue} placeholder="Pets" onChange={this.props.handlePetsChange} /><br/>
                            <label>Heating: *</label><br/><input type="text" name="heating" value={this.props.inputHeatingValue} placeholder="heating" onChange={this.props.handleHeatingChange} /><br/>
                            <label>Cooling: *</label><br/><input type="text" name="cooling" value={this.props.inputCoolingValue} placeholder="cooling" onChange={this.props.handleCoolingChange} /><br/>
                            <label>Wifi: *</label><br/><input type="text" name="wifi" value={this.props.inputWifiValue} placeholder="wifi" onChange={this.props.handleWifiChange} /><br/>
                            <label>Available from ($) : *</label><br/><input name="availablefrom" value={this.props.inputAvailablefromValue} onChange={this.props.handleAvailablefromChange} type="text" /><br/>
                            <label>Price ($) : *</label><br/><input name="price" value={this.props.inputPriceValue} onChange={this.props.handlePriceChange} type="number" /><br/>
                            <input type="submit" value="Add property" />*/}
                            <div className="formradio">
                                <label>Parking : </label><br/>
                                <input type="radio" name="parking" value='YES' /> YES<br/>
                                <input type="radio" name="parking" value='NO' /> NO<br/>
                            </div>
                            <div className="formradio">
                                <label>Pets Allowed? : </label><br/>
                                <input type="radio" name="pets" value="YES" /> YES<br/>
                                <input type="radio" name="pets" value="NO" /> NO<br/>
                            </div>
                            <div className="formradio">
                                <label>Heating availability : </label><br/>
                                <input type="radio" name="heating" value="YES" /> YES<br/>
                                <input type="radio" name="heating" value="NO" /> NO<br/>
                            </div>
                            <div className="formradio">
                                <label>Cooling availability : </label><br/>
                                <input type="radio" name="cooling" value="YES" /> YES<br/>
                                <input type="radio" name="cooling" value="NO" /> NO<br/>
                            </div>
                            <div className="formradio">
                                <label>Wifi availability : </label><br/>
                                <input type="radio" name="wifi" value="YES" onChange={this.props.handleWifiChange} /> YES<br/>
                                <input type="radio" name="wifi" value="NO" onChange={this.props.handleWifiChange} /> NO<br/>
                            </div>
                            <label>Available from : </label><br/><input type="date" name="availablefrom" value={this.state.inputAvailablefromValue} onChange={this.handleAvailablefromChange} /><br/>
                            <label>Price ($) : *</label><br/><input name="price" value={this.state.inputPriceValue} onChange={this.handlePriceChange} type="number" required /><br/>
                            <input
                                style={{visibility: 'hidden'}}
                                readOnly
                                name="id"
                                value={this.props.singledatas.id}
                            />
                            <input type="submit" value="Edit" />
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeEditModal}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <div className="singlecomp">
                    <li className="titleclass">{this.props.singledatas.title}</li>
                    <li className="descriptionclass">{this.props.singledatas.description}</li>
                    <img src={this.props.singledatas.imageurl} alt={this.props.singledatas.title} />
                    <li>Price: ${this.props.singledatas.price}</li>
                    <div className="rentalicons">
                        <li><i className="fa fa-bed" aria-hidden="true"></i> {this.props.singledatas.bedrooms}</li>
                        <li><i className="fa fa-bath" aria-hidden="true"></i> {this.props.singledatas.bathrooms}</li>
                    </div>
                    <li>City: {this.props.singledatas.city}</li>
                    <li>State: {this.props.singledatas.states}</li>
                    {/*
                    <li>State: {this.props.singledatas.state_id}</li>
                    <li>Zipcode: {this.props.singledatas.zipcode}</li>
                    <li>Parking Availability: {this.props.singledatas.parking}</li>
                    <li>Pets Allowed: {this.props.singledatas.pets}</li>
                    <li>Heating: {this.props.singledatas.heating}</li>
                    <li>Cooling: {this.props.singledatas.cooling}</li>
                    <li>Availability date: {this.props.singledatas.availablefrom}</li>
                    <li>Wifi Availability: {this.props.singledatas.wifi}</li>
                    <li>Property ID: {this.props.singledatas.id}</li> */}
                    <div className="singlebuttons">
                        <button onClick={this.openEditModal}>Edit This</button><br/>
                        <button onClick={()=> {this.props.handleDeleteButton(this.props.singledatas.id)}}> Delete Listing</button>
                        <Link to={`/rentals/${this.props.singledatas.id}`}>See Property Details</Link>
                    </div>
                </div>
            </div>

        );
    }
}
export default SingleRental;