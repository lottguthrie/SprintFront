import React, { Component } from 'react';
import './viewSupervisorReport.css';
///import axios from 'axios';

class ViewSupervisorReport extends Component {
    constructor(props) {
        super(props);
            this.state = {
                Reports: [this.props.reports],
             }
        }


    render() {
        return ( 
          <div className="ViewSupervisorReportWrapper">
              <div className="ViewSupervisorReportImage">
                  <img className="viewimg" src={this.props.state.ViewSupervisorReportReport.pictures} alt=""/>
              </div>
              <div className="ViewSupervisorReportInfo">
                  
                    <h1>{this.props.state.ViewSupervisorReport.supervisor_report_id}</h1>
                    <h2>
                    supervisor_report_id: {this.props.state.ViewSupervisorReport.supervisor_report_id}<br/>
                    supervisor_id: {this.props.state.ViewSupervisorReport.supervisor_id}<br/>
                    date: {this.props.state.ViewSupervisorReport.date}<br/>
                    total_calls_for_service: {this.props.state.ViewSupervisorReport.total_calls_for_service}<br/>
                    total_case_numbers_pulled: {this.props.state.ViewSupervisorReport.total_case_numbers_pulled}<br/>
                    total_case_numbers_completed: {this.props.state.ViewSupervisorReport.total_case_numbers_completed}<br/>
                    total_reports: {this.props.state.ViewSupervisorReport.total_reports}<br/>
                    total_supplements: {this.props.state.ViewSupervisorReport.total_supplements}<br/>
                    total_vehicles_assigned : {this.props.state.ViewSupervisorReport.total_vehicles_assigned}<br/>
                    total_miles_driven: {this.props.state.ViewSupervisorReport.total_miles_driven}<br/>
                    officers_on_road: {this.props.state.ViewSupervisorReport.officers_on_road}<br/>
                    officers_on_desk: {this.props.state.ViewSupervisorReport.officers_on_desk}<br/>
                    officers_on_jail_duty: {this.props.state.ViewSupervisorReport.officers_on_jail_duty}<br/>
                    officers_on_light_duty: {this.props.state.ViewSupervisorReport.officers_on_light_duty}<br/>
                    officers_out_sick: {this.props.state.ViewSupervisorReport.officers_out_sick}<br/>
                    officers_in_training: {this.props.state.ViewSupervisorReport.officers_in_training}<br/>
                    officers_on_vacation: {this.props.state.ViewSupervisorReport.officers_on_vacation}<br/>
                    officers_assigned_elsewhere: {this.props.state.ViewSupervisorReport.officers_assigned_elsewhere}<br/>
                    total_citations_issued: {this.props.state.ViewSupervisorReport.total_citations_issued}<br/>
                    total_warnings_issued: {this.props.state.ViewSupervisorReport.total_warnings_issued}<br/>
                    total_citizen_contacts: {this.props.state.ViewSupervisorReport.total_citizen_contacts}<br/>
                    total_traffic_stops: {this.props.state.ViewSupervisorReport.total_traffic_stops}<br/>
                    total_arrest_made: {this.props.state.ViewSupervisorReport.total_arrest_made}<br/>
                    total_juvenile_contacts: {this.props.state.ViewSupervisorReport.juvenile_contacts}<br/>
                </h2>
              </div>
          </div>
        )
    }
}

export default ViewSupervisorReport;