import React from "react";
import styles from "../patientUI.module.css";
import {Grid} from "@material-ui/core";
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import FooterContact from "./FooterContact";
import FooterAddress from "./FooterAddress";
import FooterLinks from "./FooterLinks";


function Footer() {
    return (
        <Slide bottom>
    <div className={styles.footer}>
        <Fade bottom cascade>
        <Grid container spacing={2} justifyContent={"space-around"}>

            <Grid item xl={4} lg={5} md={6} sm={12} xs={12}>
                <FooterContact />
            </Grid>

            <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                <FooterLinks />
            </Grid>


            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <FooterAddress />
            </Grid>
        </Grid>
    </Fade>
    </div>
        </Slide>
    )
}

export default Footer;