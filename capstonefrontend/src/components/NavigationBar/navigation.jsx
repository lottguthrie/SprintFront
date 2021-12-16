import React from 'react';
import './navigation.css'
import { NavLink } from 'react-router-dom';



function Navigation(props){
    return (
            <div class='NavigationBody'>     
                <div>
                    <NavLink to="/" style={{color:"white"}}>
                        <h6 class="NavButton">Home</h6>
                    </NavLink>
                </div> 
                <div>
                    <NavLink to="/Login" style={{color:"white"}}>
                        <h6 class="NavButton">Login</h6>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Register" style={{color:"white"}}>
                        <h6 class="NavButton">Register</h6>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/ProfileView" style={{color:"white"}}>
                        <h6 class="NavButton">Profile View</h6>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/ViewDailyReport" style={{color:"white"}}>
                        <h6 class="NavButton">Daily Report</h6>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/CreateDailyReport" style={{color:"white"}}>
                            <h6 class="NavButton">Generate Daily Report</h6>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/SupervisorView" style={{color:"white"}}>
                        <h6 class="NavButton">Supervisor Homepage</h6>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/CreateSupervisorReport" style={{color:"white"}}>
                    <h6 class="NavButton">Generate Supervisor Report</h6>
                     </NavLink>
                </div>
                <div>
                    <NavLink to="/RegisterSupervisor" style={{color:"white"}}>
                    <h6 class="NavButton">Register Supervisor</h6>
                     </NavLink>
                </div>
                <div>
                    <NavLink to="/UpdateProfile" style={{color:"white"}}>
                    <h6 class="NavButton">Update Profile</h6>
                     </NavLink>
                </div>
                <div>
                    <NavLink to="/UpdateSupervisorProfile" style={{color:"white"}}>
                    <h6 class="NavButton">Update Supervisor</h6>
                     </NavLink>
                </div>
            </div>
    );

}
 
export default Navigation;