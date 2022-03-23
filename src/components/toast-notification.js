import React, {useState} from 'react';
import Toast from 'react-bootstrap/Toast';


export default function ToastNotification(props) {
    //const [position, setPosition] = useState('top-start');
    const [show, setShow] = useState(true);
  
    return (
      <>
            
                <Toast  onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <img src="favicon-32x32.png" className="rounded me-2" alt="" />
                    <strong className="me-auto">Communication Monitor</strong>
                    {/*<small className="text-muted">just now</small>*/}
                </Toast.Header>
                <Toast.Body>{props.message}</Toast.Body>
                </Toast>
                
            
            
      </>
    );
  }