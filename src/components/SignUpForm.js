import React, {Component} from 'react'
import {Container, Button, Input, FormGroup, Form, Label} from 'reactstrap'
import'./css/signupform.css'
import Nav from './Nav'

class SignUpForm extends Component{
    constructor(props){
        super(props);
       this.state ={user:{}}
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log(this.state.user)
         if(this.state.user.email){
         fetch("/api/user/sign-up", {
             "method":"POST",
             "headers":{"Accept":"application/json" , "Content-Type":"application/json"},
             "body":JSON.stringify(this.state.user)
    }).then(res=>{
        if (res.status === 200)
          return res.json();
        else{
            return {};
        }  
    })
    .then((data)=>{
        console.log(data);
        window.location.href = "/login"
    }).catch((err)=>console.log(err))
     }
    }

    onChange(event){
       const {target} = event;
       let oldUser = this.state.user;
       oldUser[target.name] = target.value;
       this.setState({user:oldUser});
       console.log(this.state.user)
    }
   
    render(){
        return(
            <Container >
                <Nav/>
                <div className="panel">
                    <h1 className="signupHeader">Signup Form </h1>
                <Form className="signupForm">
                    <FormGroup>
                        <Label for ="email">Email</Label>
                        <Input id="email" name="email" placeholder="Email Address" onChange={(e)=>this.onChange(e)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input id="address" name="addressLocation" placeholder="Address Location" onChange={(e)=>this.onChange(e)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="password" name="password" placeholder="Password" onChange={(e)=>this.onChange(e)}/>
                    </FormGroup>
                    <Button color="primary" onClick={this.handleSubmit}>Sign up</Button>
                </Form>
                </div>
                </Container> 
        )
    }
}

export default SignUpForm;