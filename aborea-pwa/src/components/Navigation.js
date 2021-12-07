import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import UilEstate from '@iconscout/react-unicons/icons/uil-estate';
import UilBackpack from '@iconscout/react-unicons/icons/uil-backpack';
import UilWindow from '@iconscout/react-unicons/icons/uil-window';
import UilAnalytics from '@iconscout/react-unicons/icons/uil-analytics';

const Navigation = () => {
    return (
        <div className="App-navbar">
            <NavLink className="App-navbar-button fill App-sidenav-btn1" activeStyle={{ color: "green" }} to="/">
                <UilEstate size="28" className="App-sidenav-btn-icon" />
                <span className="App-navbar-button-text">Home</span>
            </NavLink>
            <NavLink className="App-navbar-button fill App-sidenav-btn2" activeStyle={{ color: 'green' }} to="/backpack">
                <UilBackpack size="28" className="App-sidenav-btn-icon" />
                <span className="App-navbar-button-text">Backpack</span>
            </NavLink>
            <NavLink className="App-navbar-button fill App-sidenav-btn3" activeStyle={{ color: 'green' }} to="/level">
                <UilWindow size="28" className="App-sidenav-btn-icon" />
                <span className="App-navbar-button-text">Level</span>
            </NavLink>
            <NavLink className="App-navbar-button fill App-sidenav-btn4" activeClassName="App-sidenav-btn4-active" to="/stats">
                <UilAnalytics size="28" className="App-sidenav-btn-icon" />
                <span className="App-navbar-button-text">Statistics</span>
            </NavLink>
        </div>
    );
}
export default Navigation;