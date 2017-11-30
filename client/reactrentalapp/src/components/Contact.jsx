import React, { Component } from 'react';
import Header from './Header';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            showContactModal: false,
        }
        this.openContactModal = this.openContactModal.bind(this);
        this.closeContactModal = this.closeContactModal.bind(this);
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
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        <hr />

                        <h4>Overflowing text to show scroll behavior</h4>
                        
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