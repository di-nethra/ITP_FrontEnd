import React from "react";
import Sidebar from "../components/staff-ui/sidebar/Sidebar";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import DoneIcon from '@material-ui/icons/Done';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Topbar from "../components/staff-ui/topbar/Topbar";
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import TransformIcon from '@material-ui/icons/Transform';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import "./layout.css"
import InventoryHome from "../pages/staff-ui/inventory/InventoryHome";
import InventoryRegister from "../pages/staff-ui/inventory/InventoryRegister";
import InventoryTable from "../components/staff-ui/ad_inventory/InventoryTable";
import InventoryList from "../pages/staff-ui/inventory/InventoryList";
import Restock from "../pages/staff-ui/inventory/Restock";
import InventoryItem from "../pages/staff-ui/inventory/InventoryItem";
import InventoryReport from "../pages/staff-ui/inventory/InventoryReport";
import InventoryReportTable from "../components/staff-ui/ad_inventory/InventoryReportTable";

const Inventory = () => {
  const user = {
    name : 'Yomal Bandara',
    role : 'InventoryManager',
    list : [
      {
        path: "",
        exact: true,
        icon: <DashboardOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Dashboard',
        id: 1
      },
      {
        path: "registeranewitem",
        icon: <ExitToAppOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Register a New Item',
        id: 2
      },
      {
        path: "viewregistereditems",
        icon: <ListOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'View Registered Items',
        id: 3
      },
      {
        path: "restockitems",
        icon: <AddCircleOutlineOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Restock Items',
        id: 4
      },
      {
        path: "support",
        icon: <HelpOutlineIcon className="sidebarIcon"/>,
        iconlabel: 'Support',
        id: 5
      },

      

    ]
  }
  
  return(
  <div >
    <div className="container">

      <Sidebar user={user}/>
      <InventoryReport />
      <div className="others">
          <Topbar page={user.list}/>
          
      </div>
    </div>
    
  </div>
  )
}

export default Inventory;