import React, {Component} from 'react'
import './css/nav.css'

class Nav extends Component{
    render(){
        return(
            <header>
            <div className="container container-nav">
                <div className="site-title">
                    <h1>Weather Checker </h1>
                    <p class="subtitle">An App for checking the weather of locations</p>
        
                </div>
                <nav>
                    <ul>
                        <li><a href="/signup" className="current-page">Home</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Signup</a></li>
                        </ul>
                </nav>
            </div>
        </header>
        )
    }
}

export default Nav;