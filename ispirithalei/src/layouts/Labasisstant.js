import React from "react";
import Sidebar from "../components/staff-ui/sidebar/Sidebar";
import LabassHome from "../pages/staff-ui/lab asistant/LabassHome";
import SubmittedTests from "../pages/staff-ui/lab asistant/SubmittedTests";
import StaffAssign from "../pages/staff-ui/lab asistant/StaffAssign"
import NewTest from "../pages/staff-ui/lab asistant/NewTest"
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import DoneIcon from '@material-ui/icons/Done';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Topbar from "../components/staff-ui/topbar/Topbar";
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import TransformIcon from '@material-ui/icons/Transform';
import "./layout.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InTransist from "../pages/staff-ui/lab asistant/InTransist";
import TestReslt from "../pages/staff-ui/lab asistant/TestResult";

const Receptionist = () => {
  const user = {
    name : 'Danushka Ranasinghe',
    role : 'LabAssistant',
    list : [
      {
        path: "",
        exact: true,
        icon: <DashboardOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Dashboard',
        id: 1
      },
      {
        path: "newtests",
        icon: <AddBoxOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'New Test',
        id: 2
      },
      {
        path: "submittedtests",
        icon: <PublishOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Submitted Tests',
        id: 3
      },
      {
        path: "intrasisttests",
        icon: <TransformIcon className="sidebarIcon"/>,
        iconlabel: 'In Transist Tests',
        id: 4
      },
      {
        path: "completedtests",
        icon: <DoneIcon className="sidebarIcon"/>,
        iconlabel: 'Completed Tests',
        id: 5
      },
      {
        path: "alltests",
        icon: <ClearAllIcon className="sidebarIcon"/>,
        iconlabel: 'All Tests',
        id: 6
      },
      {
        path: "patients",
        icon: <PersonOutlineIcon className="sidebarIcon"/>,
        iconlabel: 'Patients',
        id: 7
      },
      {
        path: "support",
        icon: <HelpOutlineIcon className="sidebarIcon"/>,
        iconlabel: 'Support',
        id: 8
      },

      

    ]
  }
  
  return(
  <div >
    <Router>
    <div className="container">
      <Sidebar user={user}/>
      <div className="others">
          <Topbar page={user.list}/>
        <Switch>
          <Route exact path="/staff/labassistant/">
            <LabassHome/>
          </Route>
          <Route exact path="/staff/labassistant/newtests">
            <NewTest/>
          </Route>
          <Route path="/staff/labassistant/submittedtests">
            <SubmittedTests/>
          </Route>
          <Route path="/staff/labassistant/submittedtest/:topicId">
            <StaffAssign/>
          </Route>
          <Route path="/staff/labassistant/intrasisttests">
            <InTransist/>
          </Route>
          <Route path="/staff/labassistant/intransisttests/:testId">
            <TestReslt/>
          </Route>
        </Switch>
      </div>
      
    </div>
    </Router>
  </div>
  )
}

export default Receptionist;