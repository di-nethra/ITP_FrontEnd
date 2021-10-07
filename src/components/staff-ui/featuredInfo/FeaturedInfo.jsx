import "./featuredInfo.css";
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import TransformOutlinedIcon from '@material-ui/icons/TransformOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import TestDataService from "../../../services/tests.service";

export default function FeaturedInfo() {

  const [subb, setSubb] = useState([]);
  useEffect(() => {
    retieveSubbmittedTests();
  }, []);

  const retieveSubbmittedTests = () => {
    TestDataService.getAllSubbmited()
      .then(response => {
        setSubb(response.data)
      })
      .catch(err => {
        console.log("Error while getting data from database" + err);
      }
      )
  };
  const subbmitted = subb.length;

  const [start, setStart] = useState([]);
  useEffect(() => {
    retieveStartedTests();
  }, []);

  const retieveStartedTests = () => {
    TestDataService.getAllStarted()
      .then(response => {
        setStart(response.data)
      })
      .catch(err => {
        console.log("Error while getting data from database" + err);
      }
      )
  };
  const started = start.length;

  const [complete, setComplete] = useState([]);
  useEffect(() => {
    retieveCompletedTests();
  }, []);

  const retieveCompletedTests = () => {
    TestDataService.getAllCompleted()
      .then(response => {
        setComplete(response.data)
      })
      .catch(err => {
        console.log("Error while getting data from database" + err);
      }
      )
  };
  const completed = complete.length;

  return (
    <div className="featured">
      <div className="featuredItem">
        <Link to={"/staff/labassistant/submittedtests"} style={{ color: 'inherit', textDecoration: "none" }}>
          <span className="featuredTitle">Submitted Tests</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{subbmitted}</span>
            <span className="featuredMoneyRate">
              <ArrowUpwardOutlinedIcon className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Newly subbmitted specimens</span>
        </Link>
      </div>
      <div className="featuredItem">
        <Link to={"/staff/labassistant/intrasisttests"} style={{ color: 'inherit', textDecoration: "none" }}>
          <span className="featuredTitle">In Transist Tests</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{started}</span>
            <span className="featuredMoneyRate">
              <TransformOutlinedIcon className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Specimens that are In testing state</span>
        </Link>
      </div>
      <div className="featuredItem">
        <Link to={"/staff/labassistant/completedtests"} style={{ color: 'inherit', textDecoration: "none" }}>
          <span className="featuredTitle">Completed Tests</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{completed}</span>
            <span className="featuredMoneyRate">
              <DoneOutlinedIcon className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Completed specimen reports</span>
        </Link>
      </div>
    </div>
  );
}
