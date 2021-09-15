import React from 'react'
import "./topbar.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import {Button, Typography} from "@material-ui/core";


export default function Topbar(props) {
    let {url} = useRouteMatch();
    let history = useHistory();
    let temp = sessionStorage.getItem("user");
    let currentUser = JSON.parse(temp);
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="topLeft">
                    </div>
                    <div>
                        <Switch>
                            {props.page.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={url + "/" + route.path}
                                        exact={route.exact}
                                        children={<Typography variant="h5">{route.iconlabel}</Typography>}
                                    />

                                )
                            )
                            }
                        </Switch>
                    </div>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        {currentUser !== null ? <Button variant="outlined" color="primary" size={"large"} onClick={() => {
                            sessionStorage.removeItem("user");
                            history.push("/login")
                        }
                        }>
                            LOGOUT
                        </Button> : <AccountCircleIcon fontSize="large"/>}

                    </div>
                </div>
            </div>
        </div>
    )
}

