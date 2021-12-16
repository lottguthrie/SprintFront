import React, { Component } from 'react';
import './login.css';
//import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
            this.state = {
                username: null,
                password: null,
             }
        }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
        };

     HandleSubmit(event){
         event.preventDefault();
         this.props.getCurrentUser(event, ()=>this.state.username, ()=>this.state.password,);
     }

    render() {
        return ( 
                  
            <div className="RegisterContainer">
           <div className = 'BackgroundOverlay'></div>  

                <form className="RegistrationForm" onSubmit={(event) => this.props.getCurrentUser(event, this.state.password, this.state.username)}>
                     <div className='Registerheader'>
                     <img className="ProfilePhoto" src="C:\Users\lottg\OneDrive\Desktop\Sprint-FrontEnd\DevCodeCampCapstone-FE-REACT\capstonefrontend\src\Photos\stock-photo-closeup-of-police-lights-on-dark-street-at-night-250nw-1217710837.jpg" alt="user"/>
                        <h1>Login </h1>
                    </div>
                    <div>
                            <label>User Name</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="username"onChange={(event) => this.props.handleChange(event)}/>
                        </div>
                    </div> 

                    <div>
                            <label>Password</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="password"  onChange={(event) => this.handleChange(event)}/>
                        </div>
                    </div> 
                   
                    <button className="submitButton" type="submit" >login</button>
                    <br/>
                    
                
                </form>
            </div>
           
         );
    }
}
         



export default Login;