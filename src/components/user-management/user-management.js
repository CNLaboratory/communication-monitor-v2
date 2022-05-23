import React from 'react';
import DisplayUsers from './display-users';
import UserEdit from '../user-edit';
import authService from '../../services/auth.service';
import ToastNotification from '../toast-notification';
import ToastContainer from 'react-bootstrap/ToastContainer';
import {NotificationManager} from 'react-notifications';
import { Button } from 'react-bootstrap';
import { FaPlusSquare } from 'react-icons/fa';
import CreateUser from '../create-user';
import AlertModal, { AlertModalDangerousAction } from '../alert-modal';
import * as S from '../../styles'
import DisplayUsersAdvanced from './display-users-advanced';

export default class UserManagement extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            isCreating: false,
            isDeleting: false,
            showDeleteAlert: false,
            userToDelete: {},
            usersArray: [],
            userForEditing: {},
            showNotification: true,
            notificationsArray: [],
            currentUser: authService.getCurrentUser().username,
            settings: props.settings
        }

        this.onEdit = this.onEdit.bind(this);
        this.onEditCancel = this.onEditCancel.bind(this);
        this.onCreateCancel = this.onCreateCancel.bind(this);
        this.getAllUsersFromDB = this.getAllUsersFromDB.bind(this);
        this.getUserFromUsername = this.getUserFromUsername.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.register = this.register.bind(this);
        this.onCreateUser = this.onCreateUser.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.cancelDeleteUser = this.cancelDeleteUser.bind(this);
        this.cancelDeleteSelf = this.cancelDeleteSelf.bind(this);
        
    }
    componentDidMount () {
        this.getAllUsersFromDB();
        console.log('currentUser:', this.state.currentUser);
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
                  /*let notificationsArray = this.state.notificationsArray;
                  notificationsArray.push(<ToastNotification message={resMessage}/>);
                  this.setState({notificationsArray: notificationsArray});*/
                  NotificationManager.error(resMessage, 'Something went wrong:', 3000);
            }
        )
    }

    onCreateUser() {
        console.log('createUser');
        this.setState({
            isCreating: true,
        });
    }


    onEdit = (username) => {
        
        console.log('onEdit, username:', username);
        const userForEditing = this.getUserFromUsername(username);
        console.log('onEdit, userForEditing', userForEditing);
        this.setState({
            isEditing: true,
            userForEditing: userForEditing
        });
        
    }
    onEditCancel = () => {
        console.log('onEditCancel');
        this.setState({
            isEditing: false
        });
        /*let notificationsArray = this.state.notificationsArray;
            notificationsArray.push(<ToastNotification message={'Cancelled!'}/>);
            this.setState({notificationsArray: notificationsArray});
            */
        NotificationManager.warning('No changes were made to the user', 'Canceled', 3000);
    }
    onCreateCancel = () => {
        console.log('onCreateCancel');
        this.setState({
            isCreating: false
        });
        /*let notificationsArray = this.state.notificationsArray;
            notificationsArray.push(<ToastNotification message={'Cancelled!'}/>);
            this.setState({notificationsArray: notificationsArray});
            */
        NotificationManager.warning('No user was added', 'Cancelled', 3000);
    }
    getUserFromUsername(username) {
        console.log('getUserFromUsername, username:', username);
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
                        disabled: item.disabled,
                        roles: item.roles
                    }
            }
        })
        return userObj;
    }
    
    saveUser(updatedUser) {
        console.log('saveUser, updatedUser:', updatedUser);
        authService.updateUser(updatedUser).then(
            (response) => {
                console.log('saveUser() response: ', response);
                this.setState({isEditing: false});
                this.getAllUsersFromDB();
                /*let notificationsArray = this.state.notificationsArray;
                notificationsArray.push(<ToastNotification message={"User Saved!"}/>);
                this.setState({notificationsArray: notificationsArray});
                */
                NotificationManager.success('User was saved successfully', 'Sucess', 3000);
            }, 
            error => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
                  /*let notificationsArray = this.state.notificationsArray;
                  notificationsArray.push(<ToastNotification message={resMessage}/>);
                  this.setState({notificationsArray: notificationsArray});
                  */
                  NotificationManager.error(resMessage, 'Something went wrong:', 3000);
            }
            
        );
    }
    register(newUser) {
        console.log('createUser, newUser:', newUser);
        authService.register(newUser).then(
            (response) => {
                console.log('saveUser() response: ', response);
                this.setState({isCreating: false});
                this.getAllUsersFromDB();
                /*let notificationsArray = this.state.notificationsArray;
                notificationsArray.push(<ToastNotification message={"User Saved!"}/>);
                this.setState({notificationsArray: notificationsArray});
                */
                NotificationManager.success('User was created successfully','Sucess', 3000);
            }, 
            error => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
                  /*let notificationsArray = this.state.notificationsArray;
                  notificationsArray.push(<ToastNotification message={resMessage}/>);
                  this.setState({notificationsArray: notificationsArray});
                  */
                  NotificationManager.error(resMessage, 'Something went wrong:', 3000);
            }
            
        );
    }
    onDelete(username) {
        console.log('onDelete, username:', username);
        if (username === this.state.currentUser) {
            this.setState({
                isDeletingSelf: true
            })
        } else {
            this.setState({
                isDeleting: true,
                showDeleteAlert: true,
                userToDelete: this.getUserFromUsername(username)
            });
    
        }
        
    }
    deleteUser () {
        console.log('deleteUser');
        authService.deleteUser(this.state.userToDelete.username).then(
            (response) => {
                this.setState({
                    isDeleting: false,
                    showDeleteAlert: false,
                    userToDelete: {}
                });
                this.getAllUsersFromDB();
                NotificationManager.success('User deleted successfully!', 'Success', 3000);
            }, 
            error => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
                  
                  NotificationManager.error(resMessage, 'Something went wrong:', 3000);
            }
        )

    }
    cancelDeleteUser () {
        this.setState({
            isDeleting: false,
            showDeleteAlert: false,
            userToDelete: {}
        })
    }
    cancelDeleteSelf() {
        this.setState({
            isDeletingSelf: false
        })
    }
    

    render() {
        return (
            <S.Card>
              <S.CardBody>
                <S.UserManagementHeaderToolsWrapper>
                    {!this.state.isCreating && 
                    <S.StyledButtonPrimary
                        variant="info"
                        title="Edit user details"
                        onClick={this.onCreateUser}
                    >
                        Add User
                    </S.StyledButtonPrimary>
                    }
                </S.UserManagementHeaderToolsWrapper>
                
                {!this.state.isEditing && !this.state.isCreating && <DisplayUsersAdvanced users={this.state.usersArray} onEdit={this.onEdit} onDelete={this.onDelete} settings={this.state.settings}/> }
                {this.state.isEditing && <UserEdit user={this.state.userForEditing} isCurrentUser={this.state.userForEditing.username === this.state.currentUser} saveUser={this.saveUser} onCancel={this.onEditCancel}/>}
                {this.state.isCreating && <CreateUser saveUser={this.register} onCancel={this.onCreateCancel}/>}
                {
                    this.state.notificationsArray.length > 0 && 
                    
                    <ToastContainer position={'top-end'} className="p-3">
                        {console.log('this.state.notificationsArray:', this.state.notificationsArray)}
                        {<ToastNotification message='Test1'/>}
                        {<ToastNotification message='Test1'/>}
                        {this.state.notificationsArray}
                    </ToastContainer>
                    
                }
                
                {this.state.isDeletingSelf && <AlertModal show={this.state.isDeletingSelf} onClose={this.cancelDeleteSelf} message="You can't delete yourself :)"/>}
                {this.state.showDeleteAlert && <AlertModalDangerousAction 
                                                    show={this.state.showDeleteAlert}
                                                    message={'Are you sure you want to delete user: "' + this.state.userToDelete.username + '" ?'}
                                                    proceedMessage='Delete'
                                                    cancelMessage='Cancel'
                                                    onProceed={this.deleteUser}
                                                    onCancel={this.cancelDeleteUser}
                                                    />}
                </S.CardBody>
            </S.Card>

            
            
        );
    }
}

