import React from "react";
import styles from "../patientUI.module.css";
import logoDark from "../../../assets/images/logo_dark.png"
import {Grid, Hidden} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom";



function Logo() {
    return <div className={styles.logo_bg}>
        <Grid container alignItems={"center"} justifyContent={"space-evenly"}>
            <Hidden lgUp>
                <Grid item>
                    <MenuIcon />
                </Grid>
            </Hidden>
            <Link to="/">
            <Grid item>
                <img className={styles.logoPatient} src={logoDark} alt="Ispirithaalei Logo"/>
            </Grid>
            </Link>
        </Grid>

        </div>
}

export default Logo;