import React from "react";
import styles from "./patientUI.module.css";
import Logo from "./Header/Logo.js"
import {Grid, Link, Typography} from "@material-ui/core";

import Navigation from "./Header/Navigation";



function Header() {
    return <div className={styles.header}>
        <Grid container>
            <Grid item xs={3}>
            <Logo />
            </Grid>
            <Grid item xs={9} alignItems={"center"}>
                <Navigation />
            </Grid>
        </Grid>
    </div>
}

export default Header;