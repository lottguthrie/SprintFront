import React, { Component } from 'react';
import './profile.css';
import {Link} from 'react-router-dom';
//import axios from 'axios';

class ProfileView extends Component {
    constructor(props) {
        super(props);
            this.state = {
                Update: "",
             }
        }


    render() {
        return ( 
            <div>
            <div className="ProfileContainer">
               <div className="ProfileImage">
                   <img src="C:\Users\lottg\OneDrive\Desktop\Sprint-FrontEnd\DevCodeCampCapstone-FE-REACT\capstonefrontend\src\Photos\stock-photo-closeup-of-police-lights-on-dark-street-at-night-250nw-1217710837.jpg" alt="Officer"/>
               </div>
               <div className="ProfileInfo">
                   <img src="https://image.flaticon.com/icons/png/512/3011/3011270.png" alt="user"/>
                   <h1>Officer Profile</h1>
                   <p>UserName: {this.props.state.currentUser.username}</p>
                   <p>First Name: {this.props.state.currentUser.firstName}</p>
                   <p>Last Name: {this.props.state.currentUser.lastName}</p>
                   <p>Username: {this.props.state.currentUser.username}</p>
                   <p>Email: {this.props.state.currentUser.email}</p>
                   <p>Badge Number: {this.props.state.currentUser.badge_number}</p>
                   <p>Officer Id: {this.props.state.currentUser.officer_id}</p>
                   <Link to="/UpdateProfile">
                        <button>Update</button>
                    </Link>
               </div>
               <div className="ProfileListings">
               <h3>Your Reports:</h3>
               <div className="Report">
               {this.props.state.allDailyReport.filter(function (el) {
                    return el.user===5}).map((dailyreport)=>{
                        return(
                    <div className="DailyReportListing">
                   <Link to="/viewDailyReport">
                        <button>Get Report</button>
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

export default ProfileView;