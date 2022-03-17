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
import { Link } from 'react-router-dom';
import DisplayUsers from './display-users';
import UserEdit from './user-edit';
import {users} from '../data/data';
import authService from '../services/auth.service';

export default class UserManagement extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            usersArray: [],
            userForEditing: {}
        }

        this.onEdit = this.onEdit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.getAllUsersFromDB = this.getAllUsersFromDB.bind(this);
        this.getUserFromUsername = this.getUserFromUsername.bind(this);
    }
    componentDidMount () {
        this.getAllUsersFromDB();
    }

    getAllUsersFromDB() {
        authService.getAllUsers().then(
            (response) => {
                console.log('getAllUsers() response: ', response);
                this.setState({usersArray: response.data});
            }, 
            error => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
            }
        )
    }


    onEdit = (username) => {
        
        console.log('onEdit, username:', username);
        const usernameForEditing = this.getUserFromUsername(username);
        console.log('onEdit, usernameForEditing', usernameForEditing);
        this.setState({
            isEditing: true,
            userForEditing: usernameForEditing
        });
        
    }
    onCancel = () => {
        console.log('onCancel');
        this.setState({
            isEditing: false
        })
    }
    getUserFromUsername(username) {
        console.log('usernametoUserInState, username:', username);
        console.log('this.state.userArray', this.state.usersArray);
        let userObj;
        this.state.usersArray.forEach((item, index) => {
            if (item.username === username) {
                console.log('user.username:', item.username);
                userObj = 
                    {
                        id: item.id,
                        username: item.username,
                        firstName: item.firstName,
                        lastName: item.lastName,
                        phoneNumber: item.phoneNumber,
                        email: item.email,
                        disabled: item.disabled
                    }
            }
        })
        return userObj;
    }
    updateUserInAllUsersArray(updatedUser) {
        const newUsersArray = this.state.usersArray;

        
    }
    saveUser(updatedUser) {
        console.log('saveUser, updatedUser:', updatedUser);
        authService.updateUser(updatedUser).then(
            (response) => {
                console.log('saveUser() response: ', response);
                const newUsersArray = this.state.usersArray;
                this.updateUserInAllUsersArray(updatedUser);

                this.setState({usersArray: newUsersArray});
            }, 
            error => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
            }
        )
    }

    render() {
        return (
            <div>
                
                {!this.state.isEditing && <DisplayUsers users={this.state.usersArray} onEdit={this.onEdit}/>}
                {this.state.isEditing && <UserEdit user={this.state.userForEditing} saveUser={this.saveUser} onCancel={this.onCancel}/>}
            </div>

            
            
        );
    }
}

