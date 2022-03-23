import React from 'react';
import {
    Button, 
    Form
} from 'react-bootstrap'

export default class CreateUser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username:'',
            password:'',
            firstName:'',
            lastName:'',
            phoneNumber:'',
            disabled:'',
            email:'',
            roles:[]
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeDisabled = this.onChangeDisabled.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
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
        this.props.saveUser(formValues);
    }
    onChangeUsername(event) {
        this.setState({username: event.target.value});
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
        console.log('onChangeDisabled: event.target.checked', event.target.checked);
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
        this.setState({roles: roles});
    }
    

    render() {
        return(
            <div>
                {console.log('user:', this.props.user)}
                <h2>Create User</h2>
                <Form style={{width:'50%'}}>
                    <Form.Group className="mb-3" controlId="formUserUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control required type="text" onChange={this.onChangeUsername}></Form.Control>
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password"   onChange={this.onChangePassword}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text"  onChange={this.onChangeFirstName}></Form.Control>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text"  onChange={this.onChangeLastName}></Form.Control>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formUserEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email"   onChange={this.onChangeEmail}/>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formUserPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="email"   onChange={this.onChangePhoneNumber}/>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserDisabled">
                        <Form.Label>Disabled</Form.Label>
                        <Form.Check type="checkbox"  onChange={this.onChangeDisabled}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUserRole">
                        <Form.Label>Role</Form.Label>
                        <div key='inline-role-radio' className="mb-3">
                            <Form.Check inline type="checkbox" value="admin" onChange={this.onChangeRole} label="Admin" name="group1" id="formUserRoleAdmin"/>
                            <Form.Check inline type="checkbox" value="moderator" onChange={this.onChangeRole} label="Moderator" name="group1" id="formUserRoleModerator"/>
                            <Form.Check inline type="checkbox" value="user" onChange={this.onChangeRole} label="User" name="group1" id="formUserRoleUser"/>
                        </div>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.onSubmit}>
                        Create
                    </Button>
                    <Button variant='light' type='button' onClick={this.props.onCancel}>
                        Cancel
                    </Button>
                </Form>
                

            </div>
            
        )
    }
}