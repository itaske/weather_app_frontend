import React, {Component} from 'react'
import LocalStorage from 'localStorage'
import {Container, Button, Input} from 'reactstrap'
import './css/dashboard.css'

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {user:{name:""}, weatherQuery:{city:"abuja", unit:"f"}, weatherDetails:{}}
        this.getWeather = this.getWeather.bind(this);
    }

    componentDidMount(){
        const  user = JSON.parse(LocalStorage.getItem("user"));
        console.log("Early ");
        console.log(user);
        this.setState({user:user})
        console.log(this.state.user);
    }

    getWeather(){

        let query = Object.keys(this.state.weatherQuery)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(this.state.weatherQuery[k]))
             .join('&')
        fetch("/api/weather/?"+query,{
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Authorization": "Bearer "+this.state.user.token
            }
        }).then((res)=>{
            console.log(res.status)
            return res.json();
        }).then(data=>{
            console.log(data);
            this.setState({weatherDetails:data})
        })
    }

    handleChange(e){
        const {target} = e;
      let weather = this.state.weatherQuery;
      weather[target.name] = target.value;
      console.log(weather)
      this.setState({weatherQuery:weather})
    }


    render(){

        return(
            <Container className="container">
                
                <div className="dashboard">
                      <h1>Dashboard</h1>         
                        <form >
                        <div className="search-box"> 
                                <Input className="search-box-component" name="city" placeholder="City" onChange={(e)=>this.handleChange(e)}/>
                                <select className="search-box-component" name="unit" placeholder="Unit" onChange={(e)=>this.handleChange(e)}>
                                    <option value="f">Fahrenheit</option>
                                    <option value='m'>Metrics</option>
                                    <option value="s">Scientific</option>
                                    </select>
                                <Button className="search-box-component" color="primary" onClick={this.getWeather}>Search</Button>
                                </div>
                        </form>         
                   <div className="infoPanel">
                        <h2>User Info</h2>
                        <div className="infobodyPanel">
                        <p>{this.state.user.email}</p>
                        </div>
                        {this.state.weatherDetails.current !== undefined &&  
                        <div className="result">
                           <div className="result-header">
                                <h2>{ this.state.weatherDetails.current.weather_descriptions[0]}</h2>
                                <img alt="Weather" src={this.state.weatherDetails.current.weather_icons[0]}></img>
                                <h3>Location: {this.state.weatherDetails.location.name} in {this.state.weatherDetails.location.country}</h3>
                            </div>
                            <div className="result-body">
                                <div className="result-body-component">
                                    <label>Temperature</label>{" "}
                                    <label>{this.state.weatherDetails.current.temperature}</label>
                                </div>
                                <div className="result-body-component">
                                    <label>Humidity</label>{" "}
                                    <label>{this.state.weatherDetails.current.humidity}</label>
                                </div>
                                <div className="result-body-component">
                                    <label>Precipitation</label>{" "}
                                    <label>{this.state.weatherDetails.current.precip}</label>
                                </div>
                                <div className="result-body-component">
                                    <label>Pressure</label>{" "}
                                    <label>{this.state.weatherDetails.current.pressure}</label>
                                </div>
                                </div>
                        </div> }
        
                   </div>
                </div>
            </Container>
        )
    }

}

export default Dashboard