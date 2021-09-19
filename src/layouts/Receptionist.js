import React from "react";
import Sidebar from "../components/staff-ui/sidebar/Sidebar";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DoneIcon from '@material-ui/icons/Done';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Topbar from "../components/staff-ui/topbar/Topbar";
import "./layout.css"
import {Route, Switch} from "react-router-dom";
import Pending from "../pages/staff-ui/receptionist/Pending";
import CheckedIn from "../pages/staff-ui/receptionist/CheckedIn";
import Dashboard from "../pages/staff-ui/receptionist/Dashboard";
import AllAppointments from "../pages/staff-ui/receptionist/AllAppointments";
import Support from "../pages/staff-ui/receptionist/Support";


const Receptionist = () => {
  let temp = sessionStorage.getItem("user");
  let currentUser = JSON.parse(temp);
  const user = {
    name: currentUser?.firstName + " " + currentUser?.lastName,
    role: currentUser?.role,
    list: [
      {
        path: "",
        exact: true,
        icon: <DashboardOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Dashboard',
        id: 1
      },
      {
        path: "pendingappointments",
        icon: <ScheduleIcon className="sidebarIcon"/>,
        iconlabel: 'Pending Check-in',
        id: 2
      },
      {
        path: "checkedinappointments",
        icon: <DoneIcon className="sidebarIcon"/>,
        iconlabel: 'Checked-in ',
        id: 3
      },
      {
        path: "allappointments",
        icon: <ClearAllIcon className="sidebarIcon"/>,
        iconlabel: 'All Appointments',
        id: 4
      },
      {
        path: "support",
        icon: <HelpOutlineIcon className="sidebarIcon"/>,
        iconlabel: 'Support',
        id: 6
      },


    ]
  }
  return (
      <div>
        <div className="container">
          <Sidebar user={user}/>
          <div className="others">
            <Topbar page={user.list}/>
            <Switch>
              <Route exact path="/staff/receptionist/">
                <Dashboard/>
              </Route>
              <Route path="/staff/receptionist/allappointments">
                <AllAppointments/>
              </Route>
              <Route path="/staff/receptionist/pendingappointments">
                <Pending/>
              </Route>
              <Route path="/staff/receptionist/checkedinappointments">
                <CheckedIn/>
              </Route>
              <Route path="/staff/receptionist/support">
                <Support/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
  )
}

export default Receptionist;