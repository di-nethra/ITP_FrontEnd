import React from 'react'
import Header from "./components/patient-ui/Header/Header";
import Home from "./pages/patient-ui/PatientHome";
import {createTheme, ThemeProvider} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import About from "./pages/patient-ui/About";

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
            <div>
                <Header />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    </ThemeProvider>
)
export default App