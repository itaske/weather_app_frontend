import React, {Component} from 'react'
import LocalStorage from 'localStorage'
import {Container, Button, Form, Input, FormGroup} from 'reactstrap'

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        const  user = JSON.parse(LocalStorage.getItem("user"));
        console.log("Early ");
        console.log(user);
        this.setState({...user})
        console.log(this.state);
    }



    render(){
        return(
            <Container className="container">
                <h1>Dashboard</h1>
                <div className="dashboard">
                   <Form>
                     <FormGroup>
                         <Input name="Search" placeholder="Search"/>
                     </FormGroup>
                     <Button color="primary">Search</Button>
                   </Form>
                   <div className="infoPanel">
                        <h2>User Info</h2>
                        <div className="infobodyPanel">
                        <p>{this.state.user.email}</p>
                        <p>{this.state.user.token}</p>
                        </div>
                   </div>
                </div>
            </Container>
        )
    }

}

export default Dashboard