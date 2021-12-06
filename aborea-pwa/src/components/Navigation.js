import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import UilEstate from '@iconscout/react-unicons/icons/uil-estate';
import UilBackpack from '@iconscout/react-unicons/icons/uil-backpack';
import UilWindow from '@iconscout/react-unicons/icons/uil-window';
import UilAnalytics from '@iconscout/react-unicons/icons/uil-analytics';

const Navigation = () => {
    return (
        <footer className="App-footer">
            <NavLink className="App-sidenav-btn fill App-sidenav-btn1" activeStyle={{ color: "green" }} to="/">
                <UilEstate size="28" className="App-sidenav-btn-icon" />
                Dashboard
            </NavLink>
            <NavLink className="App-sidenav-btn fill App-sidenav-btn2" activeStyle={{ color: 'green' }} to="/backpack">
                <UilBackpack size="28" className="App-sidenav-btn-icon" />
                Backpack
            </NavLink>
            <NavLink className="App-sidenav-btn fill App-sidenav-btn3" activeStyle={{ color: 'green' }} to="/level">
                <UilWindow size="28" className="App-sidenav-btn-icon" />
                Level
            </NavLink>
            <NavLink className="App-sidenav-btn fill App-sidenav-btn4" activeClassName="App-sidenav-btn4-active"   activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to="/stats">
                <UilAnalytics size="28" className="App-sidenav-btn-icon" />
                Development
            </NavLink>
        </footer>
    );
}
export default Navigation;