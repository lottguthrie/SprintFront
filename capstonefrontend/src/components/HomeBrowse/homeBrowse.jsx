import React from 'react';
import './homeBrowse.css';
import {Link} from 'react-router-dom';


function HomeBrowse(props){
    return (
            <div class='HomeBrowseBody'>
                <div className="BrowseReports">
                    <Link to="/ViewDailyReport" style={{color:"white"}}>
                            Browse Daily Reports
                    </Link>
                    <br/>
                    <Link to="/ViewSupervisorReports" style={{color:"white"}}>
                            Browse Supervisor Reports
                    </Link>
                </div>
            </div>
    );

}
 
export default HomeBrowse;