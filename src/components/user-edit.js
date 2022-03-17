import React from 'react';
import {
    Button, 
    Form
} from 'react-bootstrap'

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
            username:this.props.user.username,
            password:'',
            firstName:this.props.user.firstName,
            lastName:this.props.user.lastName,
            phoneNumber:this.props.user.phoneNumber,
            disabled:this.props.user.disabled,
            email:this.props.user.email
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeDisabled = this.onChangeDisabled.bind(this);
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
            disabled:this.state.disabled === 'on' ? true : false,
            email:this.state.email
        }
        console.log('onSubmit, formValues:', formValues);
        this.props.saveUser(formValues);
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
        this.setState({disabled: event.target.value});
    }
    

    render() {
        return(
            <div>
                {console.log('user:', this.props.user)}
                <h2>Edit User</h2>
                <Form style={{width:'50%'}}>
                    <Form.Group className="mb-3" controlId="formUserFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder={this.props.user.firstName} onChange={this.onChangeFirstName}></Form.Control>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder={this.props.user.lastName} onChange={this.onChangeLastName}></Form.Control>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder={this.props.user.username}></Form.Control>
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder={this.props.user.email}  onChange={this.onChangeEmail}/>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder=""  onChange={this.onChangePassword}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="email" placeholder={this.props.user.phoneNumber}  onChange={this.onChangePhoneNumber}/>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserDisabled">
                        <Form.Label>Disabled</Form.Label>
                        <Form.Check type="checkbox"  onChange={this.onChangeDisabled}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Check inline type="radio" label="Admin"/>
                        <Form.Check inline type="radio" label="Moderator"/>
                        <Form.Check inline type="radio" label="User"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.onSubmit}>
                        Save
                    </Button>
                    <Button variant='light' type='button' onClick={this.props.onCancel}>
                        Cancel
                    </Button>
                </Form>

            </div>
            
        )
    }
}