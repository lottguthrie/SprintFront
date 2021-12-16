import React, { Component } from 'react';
import './supervisorview.css';
import {Link} from  'react-router-dom';
//import axios from 'axios';

class SupervisorView extends Component {
    constructor(props) {
        super(props);
            this.state = {
                Update: "",
                }
        }


    render() {
        return ( 
            <div>
            <div className="SupervisorContainer">
                <div className="SupervisorImage">
                    <img src="https://images.pexels.com/photos/4218369/pexels-photo-4218369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Ranks"/>
                </div>
                <div className="SupervisorInfo">
                    <img src="https://image.flaticon.com/icons/png/512/3011/3011270.png" alt="user"/>
                    <h1>Supervisor Profile</h1>
                    <p>UserName: {this.props.state.currentUser.username}</p>
                    <p>First Name: {this.props.state.currentUser.firstName}</p>
                    <p>Last Name: {this.props.state.currentUser.lastName}</p>
                    <p>Username: {this.props.state.currentUser.username}</p>
                    <p>Email: {this.props.state.currentUser.email}</p>
                    <p>Badge Number: {this.props.state.currentUser.badge_number}</p>
                    <p>Officer Id: {this.props.state.currentUser.officer_id}</p>
                    <p>Supervisor Id: {this.props.state.currentUser.supervisor_id}</p>
                    <Link to="/UpdateSupervisorProfile">
                        <button>Update Supervisor Profile</button>
                    </Link>
                </div>
                <div className="SupervisorProfileListings">
                <h3>Your Reports:</h3>
                <div className="Report">
                {this.props.state.allSupervisorReport.filter(function (el) {
                    return el.user===5}).map((supervisorreport)=>{
                        return(
                    <div className="SupervisorReportListing">
                    <Link to="/viewSupervisorReport">
                        <button>Get Supervisor Report</button>
                    </Link>
                        </div>
                        )
                    }
                    )
                }
                    </div>
                </div>
                </div>
                </div>
                    )
            }
        }

export default SupervisorView;