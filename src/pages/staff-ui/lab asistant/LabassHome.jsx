import React from 'react'
import FeaturedInfo from '../../../components/staff-ui/featuredInfo/FeaturedInfo'
import FeaturedInfoo from '../../../components/staff-ui/featuredInfo/FeaturedInfoo'
import Chart from '../../../components/staff-ui/chart-Lab/Chart'
import "./labasshome.css"
import { userData } from "../../../dummyData";

function LabassHome() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="Completed Test Analysis" grid dataKey="Completed Tests"/>
            <FeaturedInfoo />
        </div>
        
    )
}

export default LabassHome

