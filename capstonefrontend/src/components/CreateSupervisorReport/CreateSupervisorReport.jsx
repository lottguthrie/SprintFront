import React, { Component } from 'react';
import './CreateSupervisorReport.css';
import axios from 'axios';
//import axios from 'axios';

class GenerateSupervisorReport extends Component {
    constructor(props) {
        super(props);
            this.state = {
                supervisor_report_id: null,
                supervisor_id: null,
                date: null,
                total_calls_for_service: null,
                total_case_numbers_pulled: null,
                total_case_numbers_completed: null,
                total_reports: null,
                total_supplements: null,
                total_vehicles_assigned : null,
                total_miles_driven: null,
                officers_on_road: null,
                officers_on_desk: null,
                officers_on_jail_duty: null,
                officers_on_light_duty: null,
                officers_out_sick: null,
                officers_in_training: null,
                officers_on_vacation: null,
                officers_assigned_elsewhere: null,
                total_citations_issued: null,
                total_warnings_issued: null,
                total_citizen_contacts: null,
                total_traffic_stops: null,
                total_arrest_made: null,
                total_juvenile_contacts: null,
            }
        }

    handleTermChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
        };

    handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const newsupervisorreport = {
                supervisor_report_id: this.state.supervisor_report_id,
                supervisor_id: this.state.supervisor_id,
                date: this.state.date,
                total_calls_for_service: this.state.total_calls_for_service,
                total_case_numbers_pulled: this.state.total_case_numbers_pulled,
                total_case_numbers_completed: this.state.total_case_numbers_completed,
                total_reports: this.state.total_reports,
                total_supplements: this.state.total_supplements,
                total_vehicles_assigned : this.state.total_vehicles_assigned,
                total_miles_driven: this.state.total_miles_driven,
                officers_on_road: this.state.officers_on_road,
                officers_on_desk: this.state.officers_on_desk,
                officers_on_jail_duty: this.state.officers_on_jail_duty,
                officers_on_light_duty: this.state.officers_on_light_duty,
                officers_out_sick: this.state.officers_out_sick,
                officers_in_training: this.state.officers_in_training,
                officers_on_vacation: this.state.officers_on_vacation,
                officers_assigned_elsewhere: this.state.officers_assigned_elsewhere,
                total_citations_issued: this.state.total_citations_issued,
                total_warnings_issued: this.state.total_warnings_issued,
                total_citizen_contacts: this.state.total_citizen_contacts,
                total_traffic_stops: this.state.total_traffic_stops,
                total_arrest_made: this.state.total_arrest_made,
                total_juvenile_contacts: this.state.juvenile_contacts,
            };
        
        await axios.post(`http://127.0.0.1:8000/SupervisorReport/`, newsupervisorreport);
        } 
        catch (error) {
            console.log(error)
        }
        finally{
            this.setState({
                supervisor_report_id: null,
                supervisor_id: null,
                date: null,
                total_calls_for_service: null,
                total_case_numbers_pulled: null,
                total_case_numbers_completed: null,
                total_reports: null,
                total_supplements: null,
                total_vehicles_assigned : null,
                total_miles_driven: null,
                officers_on_road: null,
                officers_on_desk: null,
                officers_on_jail_duty: null,
                officers_on_light_duty: null,
                officers_out_sick: null,
                officers_in_training: null,
                officers_on_vacation: null,
                officers_assigned_elsewhere: null,
                total_citations_issued: null,
                total_warnings_issued: null,
                total_citizen_contacts: null,
                total_traffic_stops: null,
                total_arrest_made: null,
                total_juvenile_contacts: null,
            });
        }
    }    

    render() {
        return (        
            <div className="ListingFormContainer">
           <div className = 'BackgroundOverlay'></div>  

                <form className="ListingForm" onSubmit={(event) => this.handleSubmit(event)}>
                     <div className='SupervisorReportGeneratorHeader'>
                        <h1>New Supervisor Report Generated </h1>
                    </div>


                    <div>
                            <label>Supervisor Report Id</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="supervisor_report_id"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Supervisor Id</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="supervisor_id"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Date</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="date"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Total Calls for Service</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="total_calls_for_service"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>

                    <div>
                            <label>Total Case Numbers Pulled</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="total_case_numbers_pulled"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>


                    <div>
                            <label>Total Case Numbers Completed</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="total_case_numbers_completedx"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>


                    <div>
                            <label>Total Reports</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="total_reports"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Total Supplements</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="total_supplements"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Total Vehicles Assigned</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="total_vehicles"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>

                    <div>
                            <label>Total Miles Driven</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="total_miles_driven"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>


                    <div>
                            <label>Officers on Road</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="officers_on_road"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>


                    <div>
                            <label>Officers on Desk</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="officers_on_desk"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>


                    <div>
                            <label>Officers on Jail Duty</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="officers_on_jail_duty"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>


                    <div>
                            <label>Officers on Light Duty</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="officers_on_light_duty"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>


                    <div>
                            <label>Officers Out Sick</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="officers_out_sick"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>


                    <div>
                            <label>Officers in Training</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="officers_in_training"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>


                    <div>
                            <label>Officers on Vacation</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="officers_on_Vacation"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>


                    <div>
                            <label>Officers Assigned Elsewhere</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="officers_assigned_elsewhere"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>


                    <div>
                            <label>Total Citations Issued</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="total_citations_issued"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Total Warnings Issued</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="total_warnings_issued"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>
                    
                    <div>
                            <label>Total Citizen Contacts</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="total_citizen_contacts" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>


                    <div>
                            <label>Total Traffic Stops</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="total_traffic_stops"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>


                     <div>
                            <label>Total Arrest Made</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="total_arrest_made"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>  


                    <div>
                            <label>Total Juvenile Contacts</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="total_juvenile_contacts" placeholder="URL" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>
                    

                    <button className="submitButton" type="submit" >Generate Supervisor Report</button>
                    <br/>
                    
                
                </form>
            </div>
             
         );
    }
}

export default GenerateSupervisorReport;