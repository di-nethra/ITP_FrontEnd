import React from 'react'
import FeaturedInfo from '../../../components/staff-ui/featuredInfo/FeaturedInfo'
import FeaturedInfoo from '../../../components/staff-ui/featuredInfo/FeaturedInfoo'
import Chart from '../../../components/staff-ui/chart-Lab/Chart'
import "./labasshome.css"
//import { userData } from "../../../dummyData";
import { useEffect, useMemo, useState } from "react";
//import TestDataService from '../../../services/tests.service'
import http from "../../../http-common";
function LabassHome() {
    const MONTHS = useMemo(
        () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        []
      );
    
      const [userStats, setUserStats] = useState([]);
    
      useEffect(() => {
        const getStats = async () => {
          try {
            const res = await http.get("/tests/stats");
            const statsList = res.data.sort(function (a, b) {
              return a._id - b._id;
            });
            statsList.map((item) =>
              setUserStats((prev) => [
                ...prev,
                { name: MONTHS[item._id - 1], "Monthly Tests": item.total },
              ])
            );
          } catch (err) {
            console.log(err);
          }
        };
        getStats();
      }, [MONTHS]);
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userStats} title="Monthly test analysis" grid dataKey="Monthly Tests"/>
            <FeaturedInfoo />
        </div>
        
    )
}

export default LabassHome

