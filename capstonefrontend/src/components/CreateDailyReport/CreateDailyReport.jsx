import React, { Component } from 'react';
import './CreateDailyReport.css';
import axios from 'axios';
//import axios from 'axios';

class GenerateReport extends Component {
    constructor(props) {
        super(props);
            this.state = {
                report_id: null,
                officer_id: this.props.state.currentUser.id,
                date: null,
                calls_for_service: null,
                reports: null,
                supplements: null,
                citations_issued: null,
                warnings_issued: null,
                traffic_stops: null,
                citizen_contacts: null,
                juvenile_contacts: null,
                assigned_area: null,
                assigned_vehicle: null,
                miles_driven: null,
                hours_worked: null,
                case_numbers: null,
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
            const newreport = {
                report_id: this.state.report_id,
                officer_id: this.props.state.currentUser.id,
                date: this.state.date,
                calls_for_service: this.state.calls_for_service,
                reports: this.state.reports,
                supplements: this.state.supplements,
                citations_issued: this.state.citations_issued,
                warnings_issued: this.state.warnings_issued,
                traffic_stops: this.state.traffic_stops,
                citizen_contacts: this.state.citizen_contacts,
                juvenile_contacts: this.state.juvenile_contacts,
                assigned_area: this.state.assigned_area,
                assigned_vehicle: this.state.assigned_vehicle,
                miles_driven: this.state.miles_driven,
                hours_worked: this.state.hours_worked,
                case_numbers: this.state.case_numbers,
            };
        
        await axios.post(`http://127.0.0.1:8000/User/`,newreport);
        } 
        catch (error) {
            console.log(error)
        }
        finally{
            this.setState({
                report_id: null,
                officer_id: this.props.state.currentUser.id,
                date: null,
                calls_for_service: null,
                reports: null,
                supplements: null,
                citations_issued: null,
                warnings_issued: null,
                traffic_stops: null,
                citizen_contacts: null,
                juvenile_contacts: null,
                assigned_area: null,
                assigned_vehicle: null,
                miles_driven: null,
                hours_worked: null,
                case_numbers: null,
            });
        }
    }    



    render() {
        return (        
            <div className="ListingFormContainer">
           <div className = 'BackgroundOverlay'></div>  

                <form className="ListingForm" onSubmit={(event) => this.handleSubmit(event)}>
                     <div className='ReportGeneratorHeader'>
                        <h1>New Report Generated </h1>
                    </div>


                    <div>
                            <label>Report Id</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="report_id"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Officer Id</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="officer_id"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Date</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="date"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Calls for Service</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="calls_for_service"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>


                    <div>
                            <label>Reports</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="reports"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Supplements</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="supplement"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Citations Issued</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="citations_issued"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Warnings Issued</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="warnings_issued"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>
                    
                    
                    <div>
                            <label>Traffic Stops</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="traffic_stops"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Citizen Contacts</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="citizen_contacts" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>
                    
                    
                    <div>
                            <label>Juvenile Contacts</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="juvenile_contacts" placeholder="URL" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 

                    
                    <div>
                            <label>Assigned Area</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="assigned_area"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Assigned Vehicle</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="assigned_vehicle"onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Miles Driven</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="miles_driven" placeholder="URL" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <div>
                            <label>Hours Worked</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="hours_worked"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>
                    
                    
                    <div>
                            <label>Case Numbers Pulled</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="case_numbers"onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 


                    <button className="submitButton" type="submit" >Create</button>
                    <br/>
                    
                
                </form>
            </div>
             
         );
    }
}

export default GenerateReport;