import React, { Component} from 'react';
import './header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    state = { 
        tbd:"tbd",
     }
    render() { 
        return ( 
            <div className='HeaderWrapper'>
                <div className="HeaderIMG">
                <img className="Logo" src="C:\Users\lottg\OneDrive\Desktop\Sprint-FrontEnd\DevCodeCampCapstone-FE-REACT\capstonefrontend\src\Photos\stock-photo-closeup-of-police-lights-on-dark-street-at-night-250nw-1217710837.jpg" alt=""/>
                </div>
                <div className='HeaderSearch'>
                    <Link to="/SearchResults">
                    <div className='HeaderSearchForm'>
                        <input type="text" name="searchinput" className='SearchBar' placeholder="Search" onChange={(event) => this.props.handleChange(event)}/>
                    </div>
                    </Link>
                </div>
                <div className='HeaderAccount'>
                    <img src="https://image.flaticon.com/icons/png/512/3011/3011270.png" alt="icon"/>
                </div>
            </div>
         );
    }
}
 
export default Header;