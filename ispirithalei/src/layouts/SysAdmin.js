import React from "react";
import Sidebar from "../components/staff-ui/sidebar/Sidebar";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import TransformIcon from '@material-ui/icons/Transform';
import DoneIcon from '@material-ui/icons/Done';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Topbar from "../components/staff-ui/topbar/Topbar";
import "./layout.css"
import EmpDashboard from "../pages/staff-ui/sysadmin/EmpDashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import EmpForm from "../pages/staff-ui/sysadmin/EmpForm";
import EmpList from "../pages/staff-ui/sysadmin/EmpList";

const SysAdmin = () => {
  const user = {
    name : 'Chamod Gavindya',
    role : 'SysAdmin',
    list : [
      {
        path: "EmpDashboard",
        exact: true,
        icon: <DashboardOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Dashboard',
        id: 1
      },
      {
        path: "EmpList",
        icon: <PublishOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Employee List',
        id: 2
      },
      {
        path: "EmpForm",
        icon: <TransformIcon className="sidebarIcon"/>,
        iconlabel: 'Add Employee',
        id: 3
      },
      {
        path: "Payroll",
        icon: <DoneIcon className="sidebarIcon"/>,
        iconlabel: 'Payroll',
        id: 4
      },
      

    ]
  }
  
  return(
  <div >
    <div className="container">

      <Sidebar user={user}/>
      <div className="others">
          <Topbar page={user.list}/>
          {/* <LabassHome/> */}
          <Switch>
            <Route path="/staff/sysadmin/empdashboard" component={EmpDashboard} />
            <Route path="/staff/sysadmin/emplist" component={EmpList} />
            <Route path="/staff/sysadmin/empform" component={EmpForm} />
            
            
          </Switch>
      </div>
    </div>
  </div>
  )
}

export default SysAdmin;