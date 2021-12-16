import React, { Component } from 'react';
import './updatesupervisorprofile.css';
import axios from 'axios';
//import axios from 'axios';

class UpdateSupervisorProfile extends Component {
    constructor(props) {
        super(props);
            this.state = {
                supervisor_id: null,
                officer_id: this.props.state.currentUser.id,
                supervisor_report_id: null,
                last_name: null,
                first_name: null,
                middle_name: null,
                badge_number: null,
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
            const newSupervisor = {
                supervisor_id: this.state.supervisor_id,
                officer_id: this.state.officer_id,
                supervisor_report_id: this.state.supervisor_report_id,
                last_name: this.state.last_name,
                first_name: this.state.first_name,
                middle_name: this.state.middle_name,
                badge_number: this.state.badge_number,
            };



        
        await axios.put(`http://127.0.0.1:8000/UserById/${this.state.userid}/`,newSupervisor);
        } 
        catch (error) {
            console.log(error)
        }
        finally{
            this.setState({
                supervisor_id: null,
                officer_id: null,
                supervisor_report_id: null,
                last_name: null,
                first_name: null,
                middle_name: null,
                badge_number: null,
            });
        }
    }


    render() {
        return (    
            <div className="RegisterContainer">
            <div className = 'BackgroundOverlay'></div>  
 
                 <form className="RegistrationForm" onSubmit={(event) => this.handleSubmit(event)}>
                      <div className='Registerheader'>
                      <img className="ProfilePhoto" src="https://image.flaticon.com/icons/png/512/3011/3011270.png" alt="user"/>
                         <h1>Register </h1>
                     </div>
                     <div>
                             <label>Supervisor Id</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="supervisor_id" placeholder="Supervisor_id" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
 
                     <div>
                             <label>Officer Id</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="officer_id" placeholder="Officer_Id" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Supervisor Report Id</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="supervisor_report_id" placeholder="Supervisor_Report_Id" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Last Name</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="last_name" placeholder="Last_Name" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                          <div>
                             <label>First Name</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="first_name" placeholder="First_Name" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Middle Name</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="middle_name" placeholder="Middle_Name" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Badge Number</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="badge_number" placeholder="Badge_Number" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div>  
                     <br/>
                     <button className="submitButton" type="submit">Register Supervisor</button>
                     <br/>
                     
                 
                 </form>
             </div>
         );
    }
}

export default UpdateSupervisorProfile;