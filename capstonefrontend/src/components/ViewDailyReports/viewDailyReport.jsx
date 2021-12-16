import React, { Component } from 'react';
import './viewDailyReport.css';
///import axios from 'axios';

class ViewDailyReport extends Component {
    constructor(props) {
        super(props);
            this.state = {
                Reports: [this.props.reports],
             }
        }


    render() {
        return ( 
          <div className="ViewDailyReportWrapper">
              <div className="ViewDailyReportImage">
                  <img className="viewimg" src={this.props.state.ViewDailyReport.pictures} alt=""/>
              </div>
              <div className="ViewDailyReportInfo">
                  
                    <h1>{this.props.state.ViewDailyReport.report_id}</h1>
                    <h2>
                    report_id: {this.props.state.ViewDailyReport.report_id}<br/>
                    officer_id: {this.props.state.ViewDailyReport.officer_id}<br/>
                    date: {this.props.state.ViewDailyReport.date}<br/>
                    calls_for_service: {this.props.state.ViewDailyReport.calls_for_service}<br/>
                    reports: {this.props.state.ViewDailyReport.reports}<br/>
                    supplements: {this.props.state.ViewDailyReport.supplements}<br/>
                    citations_issued: {this.props.state.ViewDailyReport.citations_issued}<br/>
                    warnings_issued: {this.props.state.ViewDailyReport.warnings_issued}<br/>
                    traffic_stops: {this.props.state.ViewDailyReport.traffic_stops}<br/>
                    citizen_contacts: {this.props.state.ViewDailyReport.citizen_contacts}<br/>
                    juvenile_contacts: {this.props.state.ViewDailyReport.juvenile_contacts}<br/>
                    assigned_area: {this.props.state.ViewDailyReport.assigned_area}<br/>
                    assigned_vehicle: {this.props.state.ViewDailyReport.assigned_vehicle}<br/>
                    miles_driven: {this.props.state.ViewDailyReport.miles_driven}<br/>
                    hours_worked: {this.props.state.ViewDailyReport.hours_worked}<br/>
                    case_numbers: {this.props.state.ViewDailyReport.case_numbers}<br/>
                </h2>
              </div>
          </div>
        )
    }
}

export default ViewDailyReport;