import React from "react";
import {Box} from "@material-ui/core";
import styles from "../patientUI.module.css";
import logoDark from "../../../assets/images/logo_dark.png"



function Logo() {
    const customStyle = {
        dark_variant: "#00204A",
        primary : "#005792",
        secondary   : "#00BBF0",
        light_bg    : "#D9FAFF",
    }
    return <div className={styles.logo_bg}>
            <img className={styles.logo} src={logoDark}/>
    </div>
}

export default Logo;