import React from "react";
import InventoryTable from "../../../components/staff-ui/ad_inventory/InventoryTable";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InventoryReportTable from "../../../components/staff-ui/ad_inventory/InventoryReportTable";



function InventoryReport(){
    return(
    <div>
        <FormControl component="fieldset">
        <FormLabel component="legend">Filter your Report here</FormLabel> 
        <RadioGroup row aria-label="position" name="position" defaultValue="week">
            <FormControlLabel
            value="week"
            control={<Radio color="primary" />}
            label="This Week"
            labelPlacement="start"
            />

            <FormControlLabel
            value="month"
            control={<Radio color="primary" />}
            label="This Month"
            labelPlacement="start"
            />

            <FormControlLabel
            value="year"
            control={<Radio color="primary" />}
            label="This Year"
            labelPlacement="start"
            />
        </RadioGroup>
        </FormControl><br/><br/>
    <InventoryReportTable />
    </div>
    );
}
export default InventoryReport