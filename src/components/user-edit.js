import React from 'react';
import {
    Button, 
    Form
} from 'react-bootstrap'
import AlertModal from './alert-modal';
import * as S from '../styles'
/*
pass a 'user' object with the following properties:
user = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phonenumber: '',
    disabled: bool
}
*/
export default class UserEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isCurrentUser:this.props.isCurrentUser,
            username:this.props.user.username,
            password:'',
            firstName:this.props.user.firstName,
            lastName:this.props.user.lastName,
            phoneNumber:this.props.user.phoneNumber,
            disabled:this.props.user.disabled,
            email:this.props.user.email,
            roles:this.props.user.roles,
            isAdmin: this.checkRoles('admin'),
            isModerator: this.checkRoles('moderator'),
            isUser:this.checkRoles('user'),
            showAlert: false,
            alertMessage: ''

        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeDisabled = this.onChangeDisabled.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.setRoles = this.setRoles.bind(this);
        this.checkRoles = this.checkRoles.bind(this);
        this.onAlertClose = this.onAlertClose.bind(this);
    }
    
    checkRoles(role) {
        let roles = this.props.user.roles;
        if (roles.some(e => e === role)) {
            return true;
        } else return false;
    }
    onAlertClose() {
        this.setState({showAlert: false, alertMessage:''});
    }

    onSubmit(event) {
        event.preventDefault();
        console.log('onSubmit, event:', event);
        const formValues = {
            username:this.state.username,
            password:this.state.password,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            phoneNumber:this.state.phoneNumber,
            disabled:this.state.disabled,
            email:this.state.email,
            roles:this.state.roles
        }
        console.log('onSubmit, formValues:', formValues);
        if (!formValues.roles.length) {
            this.setState({
                showAlert: true,
                alertMessage: 'A user must always have a role assigned. Please select a role for this user'
            })
        } /*else if (formValues.disabled && this.state.isAdmin) {
            this.setState({
                showAlert: true,
                alertMessage: 'Admin users cannot be disabled. Please remove the disabled option or change role for this user'
            })*/
            else if (formValues.disabled && this.state.isCurrentUser) {
                this.setState({
                    showAlert: true,
                    alertMessage: 'You cannot disable yourself. Please remove the disabled option'
                })
        } else {
            this.props.saveUser(formValues);
        }
        
    }
    onChangeFirstName(event) {
        
        console.log('onChangeFirstName: event.target.value', event.target.value);
        this.setState({firstName: event.target.value});
    }
    onChangeLastName(event) {
        console.log('onChangeLastName: event.target.value', event.target.value);
        this.setState({lastName: event.target.value});
    }
    onChangePassword(event) {
        console.log('onChangePassword: event.target.value', event.target.value);
        this.setState({password: event.target.value});
    }
    onChangeEmail(event) {
        console.log('onChangeEmail: event.target.value', event.target.value);
        this.setState({email: event.target.value});
    }
    onChangePhoneNumber(event) {
        console.log('onChangePhoneNumber: event.target.value', event.target.value);
        this.setState({phoneNumber: event.target.value});
    }
    onChangeDisabled(event) {
        console.log('onChangeDisabled: event.target.value', event.target.value);
        this.setState({disabled: event.target.checked});
    }
    onChangeRole(event) {
        console.log('onChangeRole: event.target.value', event.target.value);
        console.log('onChangeRole: event.target.checked', event.target.checked);
        
        let roles = this.state.roles;
        console.log('roles before:', roles);
        if (event.target.checked) {
            roles.push(event.target.value);
        } else {
            roles = roles.filter(item => item !== event.target.value);
        }
        console.log('roles after:', roles);
        this.setState({roles: roles}, () => {
            this.setRoles()});
    }
    setRoles() {
        let roles = this.state.roles;
        console.log('roles:', roles);
        for (let i = 0; i < roles.length; i++) {
            if (roles[i] === 'admin') {
                this.setState({isAdmin: true}, () => {
                    console.log('afterSetState, isAdmin:', this.state.isAdmin)
                }
                    );
            } else if (roles[i] === 'moderator') {
                this.setState({isModerator: true});
            } else if (roles[i] === 'user') {
                this.setState({isUser: true});
            }
        }
        console.log('isAdmin:', this.state.isAdmin);
        console.log('isModerator:', this.state.isModerator);
        console.log('isUser:', this.state.isUser);
    }
    

    render() {
        return(
            <S.FormWrapper>
                {console.log('user:', this.props.user)}
                <h2>Edit User</h2>
                <Form style={{width:'50%'}}>
                    <Form.Group className="mb-3" controlId="formUserUserName">
                        <S.FormLabel>Username</S.FormLabel>
                        <Form.Control readOnly type="text" placeholder={this.props.user.username}></Form.Control>
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserPassword">
                        <S.FormLabel>Password</S.FormLabel>
                        <Form.Control type="password" placeholder=""  onChange={this.onChangePassword}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserFirstName">
                        <S.FormLabel>First Name</S.FormLabel>
                        <Form.Control type="text" placeholder={this.props.user.firstName} onChange={this.onChangeFirstName}></Form.Control>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserLastName">
                        <S.FormLabel>Last Name</S.FormLabel>
                        <Form.Control type="text" placeholder={this.props.user.lastName} onChange={this.onChangeLastName}></Form.Control>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formUserEmail">
                        <S.FormLabel>Email address</S.FormLabel>
                        <Form.Control type="email" placeholder={this.props.user.email}  onChange={this.onChangeEmail}/>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formUserPhoneNumber">
                        <S.FormLabel>Phone Number</S.FormLabel>
                        <Form.Control type="email" placeholder={this.props.user.phoneNumber}  onChange={this.onChangePhoneNumber}/>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserDisabled">
                        <S.FormLabel>Disabled</S.FormLabel>
                        <Form.Check type="checkbox"  onChange={this.onChangeDisabled}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserRole">
                        <S.FormLabel>Role</S.FormLabel>
                        <Form.Check inline defaultChecked={this.state.isAdmin} type="checkbox" value="admin" label="Admin" onChange={this.onChangeRole} name="group1" id="formUserRoleAdmin"/>
                        <Form.Check inline defaultChecked={this.state.isModerator} type="checkbox" value="moderator" label="Moderator" onChange={this.onChangeRole} name="group1" id="formUserRoleModerator"/>
                        <Form.Check inline defaultChecked={this.state.isUser} type="checkbox" value="user" label="User" onChange={this.onChangeRole} name="group1" id="formUserRoleUser"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.onSubmit}>
                        Save
                    </Button>
                    <Button variant='light' type='button' onClick={this.props.onCancel}>
                        Cancel
                    </Button>
                </Form>
                {this.state.showAlert && <AlertModal show={this.state.showAlert} message={this.state.alertMessage} onClose={this.onAlertClose}/>}
            </S.FormWrapper>
            
        )
    }
}