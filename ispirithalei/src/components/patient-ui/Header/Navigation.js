import React from "react";
import styles from "../patientUI.module.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ButtonOnNav, {HistoryButtonOnNav,LoginButtonOnNav} from "./ButtonOnNav";






function Navigation() {

    return (

        <Router>
            <div>

                <nav style={styles}>

                    <ul>
                        <LoginButtonOnNav/>
                        <HistoryButtonOnNav/>
                        <li>
                            <Link to="/lab">LAB REPORTS</Link>
                        </li>
                        <li>
                            <Link to="/drugs">DRUGS</Link>
                        </li>
                        <li>
                            <Link to="/about">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        {/*<About />*/}
                    </Route>
                    <Route path="/users">
                        {/*<Users />*/}
                    </Route>
                    <Route path="/">
                        {/*<Home />*/}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Navigation;