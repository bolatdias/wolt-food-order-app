import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MessageModal = ({ show, onHide, message }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                Message
            </Modal.Header>
            <Modal.Body >{message}</Modal.Body>
        </Modal>
    );
};

export default MessageModal;
