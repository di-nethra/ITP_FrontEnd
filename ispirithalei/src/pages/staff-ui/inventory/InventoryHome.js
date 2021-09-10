import React from "react";
import DateCard from "../../../components/staff-ui/ad_inventory/DateCard";
import InventoryTable from "../../../components/staff-ui/ad_inventory/InventoryTable";



function InventoryHome(){
    return( 
    <div>
        <div>
        <DateCard />
            <h3>Available Items</h3><br />
            {/* <DateCard /> */}
            
        </div>
        <InventoryTable />
    </div>
    );
}

export default InventoryHome