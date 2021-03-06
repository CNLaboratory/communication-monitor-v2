import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default class BootstrapDropdown extends React.Component {


    render () {
        return(
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select a label
        </Dropdown.Toggle>

        <Dropdown.Menu>
            
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        );
    }
}