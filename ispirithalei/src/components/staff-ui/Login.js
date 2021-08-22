import React from "react";
import {
    Button,
    Grid,
    Hidden,
    Link,
    TextField,
    Typography,
} from "@material-ui/core";
import './login.css'
import login_bg from "../../assets/images/login_bg.svg"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {makeStyles} from "@material-ui/core/styles";
import logo from "../../assets/1.png"


export default function Login() {
const useStyles = makeStyles({
        button: {
            margin: "20px 0"
        }
    }

)
    const classes = useStyles();


    return (

        <Grid container>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12} >

                <div className="formContainer">
                    <div>
                        <Typography variant="h1" align="center">
                            <LockOutlinedIcon style={{fontSize:'5rem'}} />
                        </Typography>
                        <Typography variant="h4" align="center">
                            STAFF LOGIN
                        </Typography>
                        <form noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Sign In
                            </Button>

                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>

                        </form>
                    </div>
                </div>
            </Grid>
            <Hidden smDown>
            <Grid item xl={8} lg={8} md={6}>
                <div className="rightside">
                    <img src={logo} className="loginLogo" alt="ispirithalei logo"/>
                    <img src={login_bg} className="loginBgImage" alt="doctors" />
                </div>

            </Grid>
            </Hidden>

        </Grid>
    )
}