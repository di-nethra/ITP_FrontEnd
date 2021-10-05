import "./featuredInfo.css";
import AllInclusiveOutlinedIcon from '@material-ui/icons/AllInclusiveOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { useEffect, useState } from 'react';
import TestDataService from "../../../services/tests.service";
import { Link } from "react-router-dom";

export default function FeaturedInfoo() {

  const [all, setAll] = useState([]);
  useEffect(() => {
    retieveAllTests();
  }, []);

  const retieveAllTests = () => {
    TestDataService.getAll()
      .then(response => {
        setAll(response.data)
      })
      .catch(err => {
        console.log("Error while getting data from database" + err);
      }
      )
  };
  const alltest = all.length;

  return (
    <Link to={"/staff/labassistant/patients"} style={{ color: 'inherit', textDecoration: "none" }}>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">All Tests</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{alltest}</span>
            <span className="featuredMoneyRate">
              <AllInclusiveOutlinedIcon className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">All tests in every state</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">My patients</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{alltest}</span>
            <span className="featuredMoneyRate">
              <AccountCircleOutlinedIcon className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">All the patients</span>
        </div>
      </div>
    </Link>
  );
}
