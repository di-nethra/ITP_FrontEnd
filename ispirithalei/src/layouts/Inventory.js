import React from "react";
import Sidebar from "../components/staff-ui/sidebar/Sidebar";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Topbar from "../components/staff-ui/topbar/Topbar";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import "./layout.css"
import InventoryHome from "../pages/staff-ui/inventory/InventoryHome";
import InventoryRegister from "../pages/staff-ui/inventory/InventoryRegister";
import InventoryList from "../pages/staff-ui/inventory/InventoryList";
import Restock from "../pages/staff-ui/inventory/Restock";
import InventoryItem from "../pages/staff-ui/inventory/InventoryItem";
import InventoryReport from "../pages/staff-ui/inventory/InventoryReport";
import {Switch, Route } from "react-router-dom";

const Inventory = () => {
  let temp = sessionStorage.getItem("user");
  let currentUser = JSON.parse(temp);
  const user = {
    name : currentUser?.firstName + " " + currentUser?.lastName,
    role: currentUser?.role,
    list: [
      {
        path: "",
        exact: true,
        icon: <DashboardOutlinedIcon className="sidebarIcon" />,
        iconlabel: 'Dashboard',
        id: 1
      },
      {
        path: "registeranewitem",
        icon: <ExitToAppOutlinedIcon className="sidebarIcon" />,
        iconlabel: 'Register a New Item',
        id: 2
      },
      {
        path: "viewregistereditems",
        icon: <ListOutlinedIcon className="sidebarIcon" />,
        iconlabel: 'View Registered Items',
        id: 3
      },
      {
        path: "restockitems",
        icon: <AddCircleOutlineOutlinedIcon className="sidebarIcon" />,
        iconlabel: 'Restock Items',
        id: 4
      },
      {
        path: "support",
        icon: <HelpOutlineIcon className="sidebarIcon" />,
        iconlabel: 'Support',
        id: 5
      },



    ]
  }

  return (
    <div >
      
        <div className="container">

          <Sidebar user={user} />
          {/* <InventoryReport /> */}
          <div className="others">
            <Topbar page={user.list} />
            <Switch>
              <Route exact path="/staff/inventorymanager/">
                <InventoryHome />
              </Route>

              
              <Route path="/staff/inventorymanager/registeranewitem">
                <InventoryRegister />
              </Route>

              <Route path="/staff/inventorymanager/viewregistereditems">
                <InventoryList />
              </Route>

              <Route path="/staff/inventorymanager/restockitems">
                <Restock />
              </Route>

              <Route path="/staff/inventorymanager/support">
                <InventoryReport />
              </Route>

              <Route path="/staff/inventorymanager/viewregistereditem/:topicId">
            <InventoryItem />
          </Route>

          <Route path="/staff/inventorymanager/inventoryreport/">
            <InventoryReport />
          </Route>
            </Switch>
          </div>
        </div>
      
    </div>
  )
}

export default Inventory;