import React, { Component } from 'react';
import DailyReportView from '../ViewDailyReports/viewDailyReport';
import './searchview.css';
//import axios from 'axios';

class SearchView extends Component {
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
                <div className="DailyReportSearch">
                {this.props.state.searchresults.map((dailyreports)=>{
                        return(
                    <div className="DailyReportSearchListing">
                        <div className="DailyReportListingName">{report.report_id}</div>
                    </div>
                        )
                        })}
                </div>
            </div>   
         );
    }
}

export default SearchView;