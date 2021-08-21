import React from 'react'
import "./topbar.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Route, Switch, useRouteMatch} from "react-router-dom";


export default function Topbar(props) {
    let { url } = useRouteMatch();

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="topLeft">
                        <span className="logo"></span>
                    </div>
                    <div>
                        <Switch>
                            {props.page.map((route, index) => (
                                <Route
                                    key={index}
                                    path={url + route.path}
                                    exact={route.exact}
                                    children={<h2>{route.iconlabel}</h2>}
                                />
                            ))}
                        </Switch>
                    </div>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <AccountCircleIcon fontSize="large"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

