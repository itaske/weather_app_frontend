import React, {Component} from 'react'
import './css/loginForm.css'
import {Container, Label, Form, Input, FormGroup, Button} from 'reactstrap'
import LocalStorage from 'localStorage'

class LoginForm extends Component{
   constructor(props){
       super(props);
       this.state ={loginDetails:{}}
       this.handleLogin = this.handleLogin.bind(this);
    
   }

   handleLogin(){
       fetch("/login",{
           method:"POST",
           headers:{"Content-Type":"application/json",
        "Accept":"application/json"},
        body:JSON.stringify(this.state.loginDetails)
       })
       .then(res=>{return res.json()})
       .then((data)=>{
           console.log(data);
           LocalStorage.setItem("user",JSON.stringify(data))
           window.location.href="/dashboard"
        })
       .catch((err)=>console.log(err))
   }

   handleChange(e){
       const {target} = e;
       let details = this.state.loginDetails;
       details[target.name] = target.value;
       this.setState({loginDetails:details});
   }

    
    render(){
        return(
        <Container className="loginForm">
            
                <Form >
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="text" name="email" id="email" placeholder="Enter Email" onChange={(e)=>this.handleChange(e)}/>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" placeholder="Enter password" onChange={(e)=>this.handleChange(e)}/>
                </FormGroup>    
                <Button color="primary" onClick={this.handleLogin}>Login</Button>    
                </Form>
                </Container>
               
        )
    }
}

export default LoginForm;