import React, { Component } from 'react';
// import Header from './Header';
// import Footer from './Footer';
class EditForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleEditForm}>
                    <label>Title: *</label><br/><input type="text" name="title" value={this.props.inputTitleValue} placeholder="Title" onChange={this.props.handleTitleChange} pattern=".{20,144}" required title="20 to 144 characters" /><br/>
                    <label>Description: *</label><br/><textarea name="description" value={this.props.inputDescriptionValue} onChange={this.props.handleDescriptionChange} placeholder="Description of the property" pattern=".{20,500}" required title="20 to 500 characters" /><br/>
                    <label>Bedrooms: </label><br/><select name="bedrooms" value={this.props.inputBedroomsValue} onChange={this.props.handleBedroomsChange}>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">5 +</option>
                                                    </select><br/>
                    <label>Bathrooms: </label><br/><select name="bathrooms" value={this.props.inputBathroomsValue} onChange={this.props.handleBathroomsChange}>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">5 +</option>
                                                    </select><br/>
                    <label>City: *</label><br/><input type="text" name="city" value={this.props.inputCityValue} onChange={this.props.handleCityChange} placeholder="Elmhurst" required/><br/>
                    <label>State: *</label><br/><select name="state_id" value={this.props.inputStateIdValue} onChange={this.props.handleStateIdChange} required>
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
                    <label>Zipcode: </label><br/><input type="text" name="zipcode" value={this.props.inputZipcodeValue} onChange={this.props.handleZipcodeChange} placeholder="Zipcode" /><br/>
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
                    <label>Available from : </label><br/><input type="date" name="availablefrom" /><br/>
                    <label>Price ($) : *</label><br/><input name="price" value={this.props.inputPriceValue} onChange={this.props.handlePriceChange} type="number" required /><br/>
                    <input type="submit" value="Add property" />
                </form>
            </div>

        );
    }
}

export default EditForm;