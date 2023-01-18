import React, { useState } from 'react';
import InfoModal from './InfoModal/InfoModal';

const Problem2 = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [contacts, setContacts] = useState([]);
    const [area, setArea] = useState('');

    const handleModal = (con) => {

        if (con === 'us-contacts') {
            console.log(con);
            fetch('https://contact.mediusware.com/api/country-contacts/United%20States/?page=1')
                .then(res => res.json())
                .then(data => {
                    setContacts(data.results)
                    handleShow()
                });
            setArea('United States Contacts')
            return;
        }


        fetch(`https://contact.mediusware.com/api/contacts/`)
            .then(res => res.json())
            .then(data => {
                setContacts(data.results)
                handleShow();
            });
        setArea('All Contacts');
    }
    console.log(contacts);
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">
                    <button onClick={() => handleModal('all-contacts')} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                    <button onClick={() => handleModal('us-contacts')} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>
            </div>
            {
                contacts.length > 0 && <InfoModal
                    show={show}

                    setShow={setShow}
                    handleShow={handleShow}
                    handleClose={handleClose}
                    contacts={contacts}
                    area={area}
                ></InfoModal>
            }


        </div>
    );
};

export default Problem2;