import React, { Component } from 'react';
import RentalsComp from './RentalsComp';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
class Rentals extends Component {

  constructor(props) {
    super(props);
      this.state = {
            completelist: [],
            apiLoaded: false,
            showModal: false
      }
      this.conditionalRentList = this.conditionalRentList.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
    this.setState({ showModal: false });
    }

    openModal() {
    this.setState({ showModal: true });
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
                        <Button
                            bsStyle="primary"
                            bsSize="large"
                            onClick={this.openModal}
                            >
                            Launch demo modal
                        </Button>  
                        </form>
                </div>
                <div className="listingdiv">
                    <p>Everything goes here</p>
                    {this.conditionalRentList()}     
                </div>

        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>

            <hr />
            <form>
                <label>Title: *</label><br/><input type="text" name="title" placeholder="Title" required /><br/>
                <label>Description: *</label><br/><textarea name="description" placeholder="Description of the property" required /><br/>
                <label>Bedrooms: </label><br/><select name="bedrooms">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">5 +</option>
                                                </select><br/>
                <label>Bathrooms: </label><br/><select name="bathrooms">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">5 +</option>
                                                </select><br/>
                <label>City: </label><br/><input type="text" name="city" placeholder="Elmhurst" /><br/>
                <label>State: </label><br/><select name="state_id">
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
                <label>Zipcode: </label><br/><input type="text" name="zipcode" placeholder="Zipcode" /><br/>
                <div className="formradio">
                    <label>Pets Allowed? : </label><br/>
                    <input type="radio" name="pets" value="yes" /> YES<br/>
                    <input type="radio" name="pets" value="no" /> NO<br/>
                </div>
                <div className="formradio">
                    <label>Parking availability : </label><br/>
                    <input type="radio" name="parking" value="yes" /> YES<br/>
                    <input type="radio" name="parking" value="no" /> NO<br/>
                </div>
                <div className="formradio">
                    <label>Heating availability : </label><br/>
                    <input type="radio" name="heating" value="yes" /> YES<br/>
                    <input type="radio" name="heating" value="no" /> NO<br/>
                </div>
                <div className="formradio">
                    <label>Cooling availability : </label><br/>
                    <input type="radio" name="cooling" value="yes" /> YES<br/>
                    <input type="radio" name="cooling" value="no" /> NO<br/>
                </div>
                <div className="formradio">
                    <label>Wifi availability : </label><br/>
                    <input type="radio" name="wifi" value="yes" /> YES<br/>
                    <input type="radio" name="wifi" value="no" /> NO<br/>
                </div>
                <label>Available from : </label><br/><input type="date" /><br/>
                <label>Price ($) : *</label><br/><input type="number" value="500" required />
            </form>
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