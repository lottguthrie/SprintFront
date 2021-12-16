import React, { Component } from 'react';
import axios from 'axios';
import './app.css';
import Home from './Home/home';
import RegisterUser from './RegisterUser/registeruser';
import Navigation from './NavigationBar/navigation';
import Header from './Header/header';
import Login from './Login/login';
import SupervisorView from './SupervisorView/supervisorview';
import ViewDailyReport from './ViewDailyReports/viewDailyReport';
import GenerateReport from './CreateDailyReport/CreateDailyReport';
import ProfileView from './ProfileView/profile';
import RegisterSupervisor from './RegisterSupervisor/registersupervisor';
import UpdateProfile from "./UpdateProfile/updateprofile";
import UpdateSupervisorProfile from './UpdateSupervisorProfile/updatesupervisorprofile';
import ViewSupervisorReport from './ViewSupervisorReports/viewSupervisorReport';
import GenerateSupervisorReport from './CreateSupervisorReport/CreateSupervisorReport';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter,
} from "react-router-dom";

//import Welcome from './Welcome/welcome';
// import HomeBrowse from './HomeBrowse/homeBrowse';

class App extends Component {
    state = {

    SetAllUpdateProfiles(){
        const allupdateprofilelistings = this.state.allUpdateProfile.concat(this.state.allItems)
        this.setState({
            allupdateprofilelistings: allupdateprofilelistings
        });
        console.log('all PROFILE LISTINGS:',this.state.allUpdateProfileListings.render())
    },


     async getUsers() {
        let users = await axios.get(`http://127.0.0.1:8000/Users/`)
        console.log(users)
        this.setState({
            allUsers: users.data,
        })
        console.log('all users:',this.state.allUsers)
        console.log('current users:',this.state.currentUser)
        this.GetlocalUsers();

    },

    async getUpdateProfile() {
        let UpdateProfile = await axios.get(`http://127.0.0.1:8000/Officer/`)
        console.log(UpdateProfile)
        this.setState({
            allUpdateProfile: UpdateProfile.data,
            viewUpdateProfile: UpdateProfile.data[1]
        })
        console.log('all Officers:',this.state.allOfficers.render())
        console.log('view Officer :',this.state.viewOfficer.render())

    },


    async getUpdateSupervisorProfile() {
        let UpdateSupervisorProfile = await axios.get(`http://127.0.0.1:8000/Supervisor/`)
        console.log(UpdateSupervisorProfile)
        this.setState({
            allUpdateSupervisorProfile: UpdateSupervisorProfile.data,
            viewUpdateSupervisorProfile: UpdateSupervisorProfile.data[1]
        })
        console.log('all Supervisors:',this.state.allSupervisors)
        console.log('view Supervisor:',this.state.viewSupervisor)

    },

    async getViewDailyReport() {
        let ViewDailyReport = await axios.get(`http://127.0.0.1:8000/DailyReport/`)
        console.log(ViewDailyReport)
        this.setState({
            allViewDailyReport: ViewDailyReport.data,
            viewDailyReport: ViewDailyReport.data[1],
        })
        console.log('all DailyReports:',this.state.allDailyReports)
        console.log('view DailyReport:',this.state.viewDailyReport)

    },

    async getViewSupervisorReport() {
        let ViewSupervisorReport = await axios.get(`http://127.0.0.1:8000/SupervisorReport/`)
        console.log(ViewSupervisorReport)
        this.setState({
            allViewSupervisorReport: ViewSupervisorReport.data,
            viewSupervisorReport: ViewSupervisorReport.data[1],
        })
        console.log('all SupervisorReports:',this.state.allSupervisorReports)
        console.log('view SupervisorReport:',this.state.viewSupervisorReport)

    },

    SetCurrentUser(input){
        try{this.setState({
            currentUser : input
        })
        console.log(this.state.currentUser)
        console.log("input is:",input)
        console.log(this.state.currentUser.username)
    }
    catch(error){
        this.setState({
            currentUser: "",
        })
    }

        
    },
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log("THEORY")
        console.log(this.state.searchinput)
        
        },


    getSearchResults (event){
        var newarray = this.state.allUpdateProfile.filter( function (el) {
            return el.officer_id===(event.target.value) || el.supervisor_id===(event.target.value) || el.last_name.includes(event.target.value)===(event.target.value)
        });
        var Officers = this.state.allOfficers.filter( function (el) {
            return el.officer_id===(event.target.value) || el.supervisor_id===(event.target.value) || el.last_name.includes(event.target.value)===(event.target.value)
        });
        this.setState({
            officersearchresults: Officers,
            searchresults: newarray,
            searchinput: event.target.value
        })
        console.log(newarray)
        console.log(this.state.searchresults)
    },

    getReportSearchResults (event){
        var newarray = this.state.allSearchView.filter( function (el) {
            return el.officer_id===(event.target.value) || el.report_id===(event.target.value) || el.date.includes(event.target.value)===(event.target.value)
        });
        var DailyReport = this.state.allDailyReports.filter( function (el) {
            return el.officer_id===(event.target.value) || el.report_id===(event.target.value) || el.date.includes(event.target.value)===(event.target.value)
        });
        this.setState({
            dailyreportsearchresults: DailyReport,
            searchresults: newarray,
            searchinput: event.target.value
        })
        console.log(newarray)
        console.log(this.state.searchresults)
    },


    getSupervisorSearchResults (event){
        var newarray = this.state.allSupervisorSearchView.filter( function (el) {
            return el.officer_id===(event.target.value) || el.report_id===(event.target.value) || el.date.includes(event.target.value)===(event.target.value)
        });
        var DailyReport = this.state.allDailyReports.filter( function (el) {
            return el.officer_id===(event.target.value) || el.report_id===(event.target.value) || el.date.includes(event.target.value)===(event.target.value)
        });
        this.setState({
            dailyreportsearchresults: DailyReport,
            searchresults: newarray,
            searchinput: event.target.value
        })
        console.log(newarray)
        console.log(this.state.searchresults)
    },

    componentDidMount(){
        this.getUsers();
        this.getUpdateProfile();
        this.getUpdateSupervisorProfile();
        this.getViewDailyReport();
        this.getSupervisorReport();
        this.getSearchResults();
        this.getReportSearchResults();   
        this.getSupervisorSearchResults();
        },

 }

    render() {
        return (
            <div className="MainWrapper">
                <Router>
                    <div>
                        <Header state={()=>this.state} handleChange={(event)=>this.getSearchResults(event)} />
                        <Navigation />
                        <div className="Content">
                            <BrowserRouter>
                            <Switch>
                                <Route path="/" exact component={Home}>
                                    <Home state={this.state} viewhome={()=>this.getHome()}/>
                                </Route>
                                <Route exact path="/Login" component={Login}>
                                    <Login handleChange={(event)=>this.handleChange(event)}getCurrentUser={(event, usernameinput, passwordinput) => this.SetCurrentUser(event, usernameinput, passwordinput)} state={this.state}/>
                                </Route>
                                <Route path="/RegisterUser" component={RegisterUser}>
                                    <RegisterUser state={this.state} setuser={()=>this.SetCurrentUser()}/>
                                </Route>
                                <Route path="/Profile" component={ProfileView}>
                                    <ProfileView state={this.state} viewdailyreport={()=>this.GetUser()}/>
                                </Route>
                                <Route path="/viewDailyReport" component={ViewDailyReport}>
                                    <ViewDailyReport state={this.state} viewdailyreport={()=>this.GetViewDailyReport()}/>
                                </Route>
                                <Route path="/CreateDailyReport" component={GenerateReport}>
                                    <GenerateReport state={this.state} viewgeneratereport={()=>this.GetGenerateReport()}/>
                                </Route>
                                <Route path="/SupervisorView" component={SupervisorView}>
                                    <SupervisorView state={this.state} viewsupervisorreport={()=>this.GetSuperviser()}/>
                                </Route>                                
                                <Route path="/CreateSupervisorReport" component={GenerateSupervisorReport}>
                                    <GenerateSupervisorReport state={this.state} viewgeneratesupervisorreport={()=>this.GetGenerateSuperviserReport()}/>
                                </Route>
                            
                                <Route path="/RegisterSupervisor" component={RegisterSupervisor}>
                                    <RegisterSupervisor state={this.state} setsupervisor={()=>this.SetCurrentSupervisor()}/>
                                </Route>

                                <Route path="/UpdateProfile" component={UpdateProfile}>
                                    <UpdateProfile state={this.state} viewupdateprofile={()=>this.getUpdateProfile()}/>
                                </Route>
                                <Route path="/UpdateSupervisorProfile" component={UpdateSupervisorProfile}>
                                    <UpdateSupervisorProfile state={this.state} viewupdatesupervisorprofile={()=>this.getUpdateSupervisorProfile()}/>
                                </Route>
                        </Switch>
                    </BrowserRouter>
                    </div>
                    </div>
                </Router>
            </div>
        )
    }
}


export default App;
