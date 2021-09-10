import React from "react";
import styles from "../patientUI.module.css";
import {NavLink} from "react-router-dom";


function Navigation() {

    return (
        <nav>

            <ul className={styles.patientNavUl}>
                <li className={styles.patientNavLi}>
                    <NavLink className={styles.patientNavA} to="/staff/inventorymanager/" activeStyle={{color: '#D9FAFF'}}>LAB REPORTS</NavLink>
                </li>
                <li>
                    <NavLink className={styles.patientNavA} to="/staff/receptionist/" activeStyle={{color: '#D9FAFF'}}>DRUGS</NavLink>
                </li>
                <li>
                    <NavLink className={styles.patientNavA} to="/about" activeStyle={{color: '#D9FAFF'}}>ABOUT US</NavLink>
                </li>
                <li>
                    <NavLink className={styles.patientNavA} exact to="/" activeStyle={{color: '#D9FAFF'}}>HOME</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;