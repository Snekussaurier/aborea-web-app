import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import UilEstate from '@iconscout/react-unicons/icons/uil-estate';
import UilBackpack from '@iconscout/react-unicons/icons/uil-backpack';
import UilWindow from '@iconscout/react-unicons/icons/uil-window';
import UilAnalytics from '@iconscout/react-unicons/icons/uil-analytics';

const Navigation = () => {
    return (
        <div className="App-navbar">
            <NavLink className="App-navbar-button App-navbar-button1" to="/">
                <UilEstate size="28" className="App-sidenav-btn-icon" />
            </NavLink>
            <NavLink className="App-navbar-button App-navbar-button2" activeStyle={{ color: 'green' }} to="/backpack">
                <UilBackpack size="28" className="App-sidenav-btn-icon" />
            </NavLink>
            <NavLink className="App-navbar-button App-navbar-button3" activeStyle={{ color: 'green' }} to="/level">
                <UilWindow size="28" className="App-sidenav-btn-icon" />
            </NavLink>
            <NavLink className="App-navbar-button App-navbar-button4" activeClassName="App-sidenav-btn4-active" to="/stats">
                <UilAnalytics size="28" className="App-sidenav-btn-icon" />
            </NavLink>
        </div>
    );
}
export default Navigation;