import React, { Component } from 'react';
import './updateprofile.css';
import axios from 'axios';
//import axios from 'axios';

class UpdateProfile extends Component {
    constructor(props) {
        super(props);
            this.state = {
        password: null, 
        last_login: null,
        is_superuser: null,
        username: null,
        first_name: null,
        last_name: null,
        email: null,
        is_staff: null,
        is_active: null,
        date_joined: null,
        middle_name: null,
        phone_number: null,
        badge_number: null,
        officer_id: this.props.state.currentUser.id,
        supervisor_id: null,
             }
        }



    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
        };

    handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const newUser = {
                password: this.state.password, 
                last_login: this.state.last_login,
                is_superuser: this.state.is_superuser,
                username: this.state.username,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                is_staff: this.state.is_staff,
                is_active: this.state.is_active,
                date_joined: this.state.date_joined,
                middle_name: this.state.middle_name,
                phone_number: this.state.phone_number,
                badge_number: this.state.badge_number,
                officer_id: this.state.officer_id,
                supervisor_id: this.state.supervisor_id,
            };



        
        await axios.put(`http://127.0.0.1:8000/UserById/${this.state.userid}/`,newUser);
        } 
        catch (error) {
            console.log(error)
        }
        finally{
            this.setState({
                password: null, 
                last_login: null,
                is_superuser: null,
                username: null,
                first_name: null,
                last_name: null,
                email: null,
                is_staff: null,
                is_active: null,
                date_joined: null,
                middle_name: null,
                phone_number: null,
                badge_number: null,
                officer_id: null,
                supervisor_id: null,
            });
        }
    }


    render() {
        return (    
            <div className="RegisterContainer">
            <div className = 'BackgroundOverlay'></div>  
 
                 <form className="RegistrationForm" onSubmit={(event) => this.handleSubmit(event)}>
                      <div className='Registerheader'>
                      <img className="ProfilePhoto" src="C:\Users\lottg\OneDrive\Desktop\Sprint-FrontEnd\DevCodeCampCapstone-FE-REACT\capstonefrontend\src\Photos\stock-photo-closeup-of-police-lights-on-dark-street-at-night-250nw-1217710837.jpg" alt="user"/>
                         <h1>Register </h1>
                     </div>
                     <div>
                             <label>Password</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="password" placeholder="Password" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
 
                     <div>
                             <label>Last Login</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="last_login" placeholder="Last_Login" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Is Superuser</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="is_superuser" placeholder="Is_Superuser" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Username</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="username" placeholder="Username" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>First Name</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="first_name" placeholder="First_Name" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Last Name</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="last_name" placeholder="Last_Name" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Email</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="email" placeholder="Email" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Is Staff</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="is_staff" placeholder="Is_Staff" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Is Active</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="is_active" placeholder="Is_Active" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Date Joined</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="date_joined" placeholder="Date_Joined" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Middle Name</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="middle_name" placeholder="Middle_Name" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Phone Number</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="phone_number" placeholder="Phone_Number" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Badge Number</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="badge_number" placeholder="Badge_Number" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Officer Id</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="officer_id" placeholder="Officer_Id" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Supervisor Id</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="supervisor_id" placeholder="Supervisor_Id" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <br/>
                     <button className="submitButton" type="submit">Register</button>
                     <br/>
                     
                 
                 </form>
             </div>
         );
    }
}

export default UpdateProfile;