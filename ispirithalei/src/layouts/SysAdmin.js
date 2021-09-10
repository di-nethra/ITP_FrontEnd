import React from "react";
import Sidebar from "../components/staff-ui/sidebar/Sidebar";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
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
import ViewListIcon from '@material-ui/icons/ViewList';
import AddIcon from '@material-ui/icons/Add';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Payroll from "../pages/staff-ui/sysadmin/Payroll";

const SysAdmin = () => {
  const user = {
    name : 'Chamod Gavindya',
    role : 'SysAdmin',
    list : [
      {
        path: "",
        exact: true,
        icon: <DashboardOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Dashboard',
        id: 1
      },
      {
        path: "emplist",
        icon: <ViewListIcon className="sidebarIcon"/>,
        iconlabel: 'Employee List',
        id: 2
      },
      {
        path: "empform",
        icon: <AddIcon className="sidebarIcon"/>,
        iconlabel: 'Add Employee',
        id: 3
      },
      {
        path: "payroll",
        icon: <MonetizationOnIcon className="sidebarIcon"/>,
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
            <Route exact path="/staff/sysadmin" component={EmpDashboard} />
            <Route path="/staff/sysadmin/emplist" component={EmpList} />
            <Route path="/staff/sysadmin/empform" component={EmpForm} /> 
            <Route path="/staff/sysadmin/payroll" component={Payroll} /> 
          </Switch>
      </div>
    </div>
  </div>
  )
}

export default SysAdmin;