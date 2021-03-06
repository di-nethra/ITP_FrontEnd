import React from "react";
import styles from "../patientUI.module.css";
import Logo from "./Logo.js"
import {Fade, Grid, Hidden, Slide} from "@material-ui/core";
import Navigation from "./Navigation";
import ButtonOnNav from "./ButtonOnNav";
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from "react-router-dom";

function Header() {
    return (
        <Slide direction="down" in={true} timeout={500}>
            <div className={styles.header}>
                <Grid container spacing={1} justifyContent={"space-between"}>
                    <Grid item xl={2} lg={2} md={7} sm={8} xs={9}>
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
                        <Grid item xl={3} lg={3} md={4} sm={3} xs={3} className={styles.navBtnGrid}>
                            <Hidden mdDown>
                            <Link to="/patient/inquiry" style={{textDecoration:"none"}}>
                            <ButtonOnNav
                                text={"FAQ"}
                                icon={<LiveHelpIcon/>}/>
                            </Link>
                            </Hidden>
                            <Link to="/login" style={{textDecoration:"none"}}>
                                <ButtonOnNav
                                    text={"Login"}
                                    icon={<ExitToAppIcon/>}
                                />
                            </Link>
                        </Grid>
                    </Fade>
                </Grid>
            </div>
        </Slide>
    )
}

export default Header;