import "./featuredInfo.css";
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import TransformOutlinedIcon from '@material-ui/icons/TransformOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Subbmitted Tests</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">5</span>
          <span className="featuredMoneyRate">
             <ArrowUpwardOutlinedIcon  className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Newly subbmitted specimens</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">In Transist Tests</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">12</span>
          <span className="featuredMoneyRate">
            <TransformOutlinedIcon className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Specimens that are In testing state</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Completed Tests</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">15</span>
          <span className="featuredMoneyRate">
            <DoneOutlinedIcon className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Completed specimen reports</span>
      </div>
    </div>
  );
}
