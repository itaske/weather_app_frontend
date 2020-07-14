import React, {Component} from 'react'
import {Container, Label, Form, Input, FormGroup, Button} from 'reactstrap'

class LoginForm extends Component{
    render(){
        return(
                <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="text" name="email" id="email" placeholder="Enter Email"/>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" placeholder="Enter password"/>
                </FormGroup>    
                <Button color="primary">Login</Button>    
                </Form>
               
        )
    }
}

export default LoginForm;