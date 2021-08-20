import React from "react";
import styles from "../patientUI.module.css";
import {NavLink} from "react-router-dom";


function Navigation() {

    return (
        <nav style={styles}>

            <ul>
                <li>
                    <NavLink to="/lab" activeStyle={{color: '#D9FAFF'}}>LAB REPORTS</NavLink>
                </li>
                <li>
                    <NavLink to="/drugs" activeStyle={{color: '#D9FAFF'}}>DRUGS</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeStyle={{color: '#D9FAFF'}}>ABOUT US</NavLink>
                </li>
                <li>
                    <NavLink exact to="/" activeStyle={{color: '#D9FAFF'}}>HOME</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;