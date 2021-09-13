import React from "react";
import styles from "../patientUI.module.css";
import Logo from "./Logo.js"
import {Fade, Grid, Hidden, Slide} from "@material-ui/core";
import Navigation from "./Navigation";
import ButtonOnNav from "./ButtonOnNav";
import HistoryIcon from "@material-ui/icons/History";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function Header() {
    return (
        <Slide direction="down" in={true} timeout={500}>
    <div className={styles.header}>
        <Grid container spacing={1} justifyContent={"space-between"}>
            <Grid item xl={3} lg={3} md={8} sm={7} xs={6}>
                <Logo/>
            </Grid>
            <Hidden mdDown>
                <Fade timeout={1500} in={true}>
                <Grid item xl={6} lg={6}>
                    <Navigation/>
                </Grid>
                </Fade>
            </Hidden>
            <Fade timeout={1500} in={true}>
            <Grid item xl={3} lg={3} md={4} sm={5} xs={6} className={styles.navBtnGrid}>
                <ButtonOnNav
                    text={"History"}
                    icon={<HistoryIcon/>}/>
                <ButtonOnNav
                    text={"Login"}
                    icon={<ExitToAppIcon/>}/>
            </Grid>
            </Fade>
        </Grid>
    </div>
        </Slide>
    )
}

export default Header;