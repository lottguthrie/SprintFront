import React, { Component } from 'react';
import Welcome from '../Welcome/welcome';
import HomeBrowse from '../HomeBrowse/homeBrowse';
import './home.css';


class Home extends Component {
    state = { 
        tbd: "tbd",
     }

    render() { 
        return ( 
            <div className="MainWrapper">
                <div>
                    <br/>
                    <Welcome/>
                </div>
                <div class='HomeBrowseBody'>
                    <HomeBrowse/>
                <div className="BrowseReports">
                </div>
            </div>
                <br/>
                </div>            
         );
    }
}
 
export default Home;