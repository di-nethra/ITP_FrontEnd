import React, {useState} from "react";
import styles from "../patientUI.module.css";
import logoDark from "../../../assets/images/logo_dark.png"
import {
    Box,
    Button,
    Drawer,
    Grid,
    Hidden,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {Link, NavLink} from "react-router-dom";
import {AssessmentOutlined, HomeOutlined, InfoOutlined, LiveHelpOutlined} from "@material-ui/icons";

function Logo() {
    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = open => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const list = () => (
        <Box
            bgcolor={theme.palette.primary.light}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >

            <List>
                <NavLink exact to="/" style={{color:theme.palette.primary.main,textDecoration:"none"}} activeStyle={{color: theme.palette.primary.dark}}>
                <ListItem button>
                    <ListItemIcon>
                        {<HomeOutlined/>}
                    </ListItemIcon>
                    <ListItemText primary="HOME"/>
                </ListItem>
                </NavLink>
                <NavLink to="/about" style={{color:theme.palette.primary.main,textDecoration:"none"}} activeStyle={{color: theme.palette.primary.dark}}>
                <ListItem button>
                    <ListItemIcon>
                        {<InfoOutlined/>}
                    </ListItemIcon>
                    <ListItemText primary="ABOUT US"/>
                </ListItem>
                </NavLink>
                <NavLink to="/labreports" style={{color:theme.palette.primary.main,textDecoration:"none"}} activeStyle={{color: theme.palette.primary.dark}}>
                <ListItem button>
                    <ListItemIcon>
                        {<AssessmentOutlined/>}
                    </ListItemIcon>
                    <ListItemText primary="LAB REPORTS"/>
                </ListItem>
                </NavLink>
                <NavLink to="/patient/inquiry" style={{color:theme.palette.primary.main,textDecoration:"none"}} activeStyle={{color: theme.palette.primary.dark}}>
                <ListItem button>
                    <ListItemIcon>
                        {<LiveHelpOutlined/>}
                    </ListItemIcon>
                    <ListItemText primary="FAQ"/>
                </ListItem>
                </NavLink>
            </List>
        </Box>
    );

    return <div className={styles.logo_bg}>
        <Grid container alignItems={"center"} justifyContent={"space-between"}>
            <Hidden lgUp>
                <Grid item sm={2} xs={1}>
                    <Button onClick={toggleDrawer(true)} style={{padding: "10px 0"}}>
                        <MenuIcon style={{padding: "10px 0"}}/>
                    </Button>
                    <Drawer
                        style={{width:"min-content"}}
                        anchor={"top"}
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                    >
                        {list()}
                    </Drawer>
                </Grid>
            </Hidden>


            <Link to="/">
                <Grid item sm={8} xs={6} lg={12} md={12} xl={12}>
                    <img className={styles.logoPatient} src={logoDark} alt="Ispirithaalei Logo"/>
                </Grid>
            </Link>
        </Grid>

    </div>
}

export default Logo;