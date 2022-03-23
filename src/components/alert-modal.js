import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function AlertModal(props) {
    const show = props.show;
  
    const handleClose = () => props.onClose();
  
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Warning</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.message}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onClose} variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export function AlertModalDangerousAction(props) {
    const show = props.show;
  
    const handleClose = () => props.onCancel();
  
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.title ? props.title : 'Warning'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.message}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onProceed} variant="primary">{props.proceedMessage ? props.proceedMessage : 'Proceed'}</Button>  
            <Button onClick={props.onCancel} variant="primary">{props.cancelMessage ? props.cancelMessage : 'Cancel'}</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

