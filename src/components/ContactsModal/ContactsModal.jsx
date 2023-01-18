import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

const ContactsModal = ({ hello }) => {

    const { show2, setShow2, handleClose2, handleShow2, area2, contacts2 } = hello;

    // const [show2, setShow2] = useState(false);
    // const handleClose2 = () => setShow2(false);
    // const handleShow2 = () => setShow2(true);
    // console.log(contacts2);
    console.log(area2);
    const textColor = area2 == 'All Contacts' ? '#46139f' : '#ff7f50'

    return (
        <div>
            <Modal
                show={show2}
                onHide={handleClose2}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: textColor }}>{area2}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        contacts2.map((contact, index) => <p key={index}>{contact.phone}</p>)
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ContactsModal;