import React from "react";
import Sidebar from "../components/staff-ui/sidebar/Sidebar";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Topbar from "../components/staff-ui/topbar/Topbar";
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import "./layout.css"
import {Route, Switch} from "react-router-dom";
import PharmacistHome from "../pages/staff-ui/pharmacist/PharmacistHome"
import DrugDispense from "../pages/staff-ui/pharmacist/DrugDispense"
import DrugStock from "../pages/staff-ui/pharmacist/DrugStock"
import PharmacistHelp from "../pages/staff-ui/pharmacist/PharmacistHelp"
import PurchaseRequest from "../pages/staff-ui/pharmacist/PurchaseRequest"
import EditPurchaseReq from "../pages/staff-ui/pharmacist/EditPurchaseReq";
import Bill from "../pages/staff-ui/pharmacist/Bill";



const Pharmasist = () => {
  let temp = sessionStorage.getItem("user");
  let currentUser = JSON.parse(temp);
  const user = {
    name : currentUser?.firstName + " " + currentUser?.lastName,
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
        path: "drugstock",
        icon: <PublishOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Drug Stock',
        id: 2
      },
      {
        path: "support",
        icon: <HelpOutlineIcon className="sidebarIcon"/>,
        iconlabel: 'Support',
        id: 3
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
              <Route exact path="/staff/pharmasist/">
                <PharmacistHome/>
              </Route>
              <Route exact path="/staff/pharmasist/drugdispense/:topicId">
                <DrugDispense/>
              </Route>
              <Route path="/staff/pharmasist/drugstock">
                <DrugStock/>
              </Route>
              <Route path="/staff/pharmasist/downloadbill/:topicId">
                <Bill/>
              </Route>
              <Route path="/staff/pharmasist/purchaserequest">
                <PurchaseRequest/>
              </Route>
              <Route path="/staff/pharmasist/editpurchasereq/:topicId">
                <EditPurchaseReq/>
              </Route>
              <Route path="/staff/pharmasist/support">
                <PharmacistHelp/>
              </Route>
            </Switch>
          </div>

        </div>
      </div>
  )
}

export default Pharmasist;