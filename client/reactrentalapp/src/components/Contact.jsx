import React, { Component } from 'react';
import Header from './Header';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            showContactModal: false,
            inputEmailAddress: '',
            inputSubject: '',
            inputMessage: '',
            
        }
        this.openContactModal = this.openContactModal.bind(this);
        this.closeContactModal = this.closeContactModal.bind(this);
        this.handleInputEmailAddressChange = this.handleInputEmailAddressChange.bind(this);
        this.handleInputSubjectChange = this.handleInputSubjectChange.bind(this);
        this.handleInputMessageChange = this.handleInputMessageChange.bind(this);
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    }

    openContactModal() {
        this.setState({
            showContactModal: true,
        })
    }

    closeContactModal() {
        this.setState({
            showContactModal: false,
        })
    }

    handleInputEmailAddressChange(event) {
        //console.log("em add");
        this.setState({inputEmailAddress: event.target.value})
    }

    handleInputSubjectChange(event) {
        this.setState({inputSubject: event.target.value});
        //console.log("em sub");
    }

    handleInputMessageChange(event) {
        this.setState({inputMessage: event.target.value});
        //console.log("em mess");
    }

    handleEmailSubmit(event) {
        event.preventDefault();
            fetch('emailroute',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    emailid: event.target.emailid.value,
                    emailsubject: event.target.emailsubject.value,
                    emailmessage: event.target.emailmessage.value,
                })
            })
            this.closeContactModal();
    }

    render() {
        return (
            <div>
                <Header />
                <h2>Feel free to message me and I will get back to you as soon as possible</h2>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={this.openContactModal}
                    //onClick={()=>{alert("hey")}}
                >Contact Me</Button>
                
                <Modal show={this.state.showContactModal} onHide={this.closeContactModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleEmailSubmit}>
                            <input type="email" name="emailid" placeholder="Email Address" value={this.state.inputEmailAddress} onChange={this.handleInputEmailAddressChange} /><br/>
                            <input type="text" name="emailsubject" placeholder="Subject" value={this.state.inputSubject} onChange={this.handleInputSubjectChange} /><br/>
                            <textarea name="emailmessage" placeholder="Message" value={this.state.inputMessage} onChange={this.handleInputMessageChange} /><br/>
                            <input type="submit" value="Send Email"/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeContactModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
                
            </div>

        );
    }
}

export default Contact;