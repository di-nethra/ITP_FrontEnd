import React, { useState } from "react";
import {
    Button,
    Grid,
    Hidden,
    TextField,
    Typography,
} from "@material-ui/core";
import "./login.css";
import login_bg from "../../assets/images/login_bg.svg";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/1.png";
import login from "../../services/login.Service";
import { useHistory, Link } from "react-router-dom";
import Swal from "sweetalert2";

const useStyles = makeStyles({
    button: {
        margin: "20px 0",
    },
});

export default function Login() {
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        };

        login(data)
            .then((response) => {
                const data = response.data
                if (response.data.accessToken) {
                    if (response.status === 200) {
                        sessionStorage.setItem("user", JSON.stringify(data));
                        switch (response.data.role) {
                            case "Doctor":
                                history.push("/staff/doctor");
                                break;
                            case "InventoryManager":
                                history.push("/staff/inventorymanager");
                                break;
                            case "Labassistant":
                                history.push("/staff/labassistant");
                                break;
                            case "Pharmasist":
                                history.push("/staff/pharmasist");
                                break;
                            case "PaymentAdmin":
                                history.push("/staff/paymentadmin");
                                break;
                            case "Receptionist":
                                history.push("/staff/receptionist");
                                break;
                            case "SysAdmin":
                                history.push("/staff/sysadmin");
                                break;
                            default:
                                alert("invalid role");
                                break;
                        }
                    }
                }
            }
            )
            .catch((e) => {
                Swal.fire(
                    "Access Denied",
                    "Please use valid user credentials",
                    "error"
                );
                // alert(e);
                console.log("ERROR : " + e);
            });
    };

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <div className="formContainer">
                    <div>
                        <Typography variant="h1" align="center">
                            <LockOutlinedIcon style={{ fontSize: "5rem" }} />
                        </Typography>
                        <Typography variant="h4" align="center">
                            STAFF LOGIN
                        </Typography>
                        <form noValidate method="post">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                value={password}
                                label="Password"
                                onChange={handlePasswordChange}
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
                                onClick={handleSubmit}
                            >
                                Sign In
                            </Button>
                        </form>
                    </div>
                </div>
            </Grid>
            <Hidden smDown>
                <Grid item xl={8} lg={8} md={6}>
                    <div className="rightside">
                        <Link to=""><img src={logo} className="loginLogo" alt="ispirithalei logo"
                            style={{ zIndex: "99", padding: "20px 0" }} /></Link>
                        <img src={login_bg} className="loginBgImage" alt="doctors" />
                    </div>
                </Grid>
            </Hidden>
        </Grid>
    );
}
