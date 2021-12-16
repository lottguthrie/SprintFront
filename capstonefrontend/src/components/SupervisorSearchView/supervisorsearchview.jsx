import React, { Component } from 'react';
import DailyReportView from '../ViewDailyReports/viewDailyReport';
import './searchview.css';
//import axios from 'axios';

class SupervisorSearchView extends Component {
    constructor(props) {
        super(props);
            this.state = {
                tbd: "tbd",
             }
        }


    render() {
        return (        
            <div className="SearchViewContainer">
                <h3 style={{margin:"0px"}}>Results matching {this.props.state.searchinput}</h3>
                <br/>
                <br/>
                
                <h2 style={{margin:"0px"}}> Daily Reports:</h2>

                <div className="SupervisorReportSearch">
                {this.props.state.searchresults.map((supervisorreport)=>{
                        return(
                    <div className="SupervisorReportListing">
                        <div className="SupervisorReportListingName">{supervisorreport.supervisor_report_id}</div>
                    </div>
                        )
                        })}
                </div>
                <br/><br/>
                <h2 style={{margin:"0px"}}>Items:</h2>
                <div className="OfficerSearch">
                {this.props.state.itemsearchresults.map((profile)=>{
                        return(
                    <div className="OfficerSearchListing">
                        <div className="OfficerSearchListingName">{profile.last_name}</div>
                    </div>
                        )
                        })}
                    </div>

            </div>
             
         );
    }
}

export default SupervisorSearchView;