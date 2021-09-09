import React from 'react'
import Header from "./components/patient-ui/Header/Header";
import Home from "./pages/patient-ui/Home";
import {createTheme, ThemeProvider} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import About from "./pages/patient-ui/About";
import Labasisstant from "./layouts/Labasisstant";
import Receptionist from "./layouts/Receptionist";
import EmpForm from './pages/staff-ui/sysadmin/EmpForm';
import SysAdmin from './layouts/SysAdmin';
import EmpList from './pages/staff-ui/sysadmin/EmpList';
import EmpDashboard from './pages/staff-ui/sysadmin/EmpDashboard';

const theme = createTheme({
    palette: {
        primary: {
            main: '#005792',
            dark: '#00204A',
            light: '#D9FAFF',
        },
    },

    typography: {
        fontFamily: 'Poppins',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
    shape : {
        borderRadius: '15px'
    },
});

const App = () => (
    <ThemeProvider theme={theme}>
        <Router>
            <Switch>
                <Route path={["/staff/labassistant", 
                "/staff/receptionist"
                ]}>

                    <Switch>

                        <Route path="/staff/labassistant" component={Labasisstant} />
                        <Route path="/staff/receptionist" component={Receptionist} />

                    </Switch>

                </Route>

                <Route path={[ 
                "/staff/sysadmin",
                "/staff/sysadmin/empdashboard", 
                "/staff/sysadmin/empform",
                "/staff/sysadmin/emplist"
                
                ]}>

                    <Switch>
                        <Route path="/staff/sysadmin" component={SysAdmin} /> 
                        <Route path="/staff/sysadmin/empdashboard" component={EmpDashboard} />
                        <Route path="/staff/sysadmin/emplist" component={EmpList} />
                        <Route path="/staff/sysadmin/empform" component={EmpForm} />
                        
                    </Switch>

                </Route>

                <Route path={["/about", "/"]}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />

                    </Switch>

                </Route>
            </Switch>
        </Router>
    </ThemeProvider>
)
export default App