import React from 'react'
import "./topbar.css"
import ISPIRITHALEI from "../../../assets/2.png";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="topLeft">
                        <span className="logo">Dashboard</span>
                    </div>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <AccountCircleIcon fontSize="large"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

