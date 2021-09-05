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

const SysAdmin = () => {
  const user = {
    name : 'Chamod Gavindya',
    role : 'Sys Admin',
    list : [
      {
        path: "",
        exact: true,
        icon: <DashboardOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Dashboard',
        id: 1
      },
      {
        path: "/pendingappointments",
        icon: <PublishOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Employee List',
        id: 2
      },
      {
        path: "/checkedinappointments",
        icon: <TransformIcon className="sidebarIcon"/>,
        iconlabel: 'Login credentials',
        id: 3
      },
      {
        path: "/allappointments",
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
          <EmpDashboard />
      </div>
    </div>
  </div>
  )
}

export default SysAdmin;