import React from 'react';
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Modal,
    Row,
    Table,
  } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';




export default class DisplayUsers extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }

        this.onEdit = this.onEdit.bind(this);
    }

    onEdit = (e) => {
        console.log('e',e);
        console.log('e.target.value',e.target.value);
        this.props.onEdit(e.target.value);

    }
    

    render() {
        return (
            <div>
                <h1>User Management</h1>
                <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>UserName</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Disabled</th>
                        <th>Actions</th>
                        <ht></ht>
                    </tr>
                </thead>
                <tbody>
                    {console.log('this.props.users:', this.props.users)}
                    {this.props.users && this.props.users.map((item) => (
                        
                        <tr key={item.id}>
                            {console.log('item.username', item.username)}
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.disabled ? 'YES':'NO'}</td>
                            
                        <td><Button
                            variant="info"
                            title="Edit user details"
                            onClick={this.onEdit}
                            value={item.username}
                            >
                            <FaPencilAlt className='noPointerEvent'/> 
                                
                            </Button>{" "}
                            <Button
                            variant="danger"
                            title="Delete user"
                            //onClick={() => thisonEdit(user1)}
                            >
                            <FaTrashAlt />
                            </Button>
                        </td>
                        </tr>
                    )

                    )}
                    {/*
                    <tr>
                        <td>1</td>
                        <td>{user1.username}</td>
                        <td>{user1.firstName}</td>
                        <td>{user1.lastName}</td>
                        <td>{user1.password}</td>
                        <td>{user1.email}</td>
                        <td>{user1.phonenumber}</td>
                        <td>{user1.disabled}</td>
                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{user2.username}</td>
                        <td>{user2.firstName}</td>
                        <td>{user2.lastName}</td>
                        <td>{user2.password}</td>
                        <td>{user2.email}</td>
                        <td>{user2.phonenumber}</td>
                        <td>{user2.disabled}</td>
                        <td><Button
                                variant="info"
                                title="Edit user details"
                                //onClick={() => thisonEdit(user1)}
                                >
                                <FaPencilAlt />
                            </Button>{" "}
                            <Button
                                variant="danger"
                                title="Delete user"
                                //onClick={() => thisonEdit(user1)}
                                >
                                <FaTrashAlt />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{user3.username}</td>
                        <td>{user3.firstName}</td>
                        <td>{user3.lastName}</td>
                        <td>{user3.password}</td>
                        <td>{user3.email}</td>
                        <td>{user3.phonenumber}</td>
                        <td>{user3.disabled}</td>
                        <td><Button
                                variant="info"
                                title="Edit user details"
                                //onClick={() => thisonEdit(user1)}
                                >
                                <FaPencilAlt />
                            </Button>{" "}
                            <Button
                                variant="danger"
                                title="Delete user"
                                //onClick={() => thisonEdit(user1)}
                                >
                                <FaTrashAlt />
                            </Button>
                        </td>
                    </tr>
                            */}
                </tbody>
                </Table>
            </div>
        )
    }
}