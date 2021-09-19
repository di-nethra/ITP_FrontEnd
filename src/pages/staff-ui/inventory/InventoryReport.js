import React from "react";
import InventoryReportTable from "../../../components/staff-ui/ad_inventory/InventoryReportTable";
import Button from '@material-ui/core/Button';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 250,
    },
  });

function InventoryReport(){
    const b_classes = useStyles();
    return(
    <div>
    <h1>Generation of Reports</h1><br/><br/>
    <InventoryReportTable /><br/><br/>
    </div>
    );
}
export default InventoryReport