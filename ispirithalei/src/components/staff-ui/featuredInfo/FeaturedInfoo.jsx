import "./featuredInfo.css";
import AllInclusiveOutlinedIcon from '@material-ui/icons/AllInclusiveOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

export default function FeaturedInfoo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">All Tests</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">32</span>
          <span className="featuredMoneyRate">
             <AllInclusiveOutlinedIcon  className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">All tests in every state</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">My patients</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">30</span>
          <span className="featuredMoneyRate">
            <AccountCircleOutlinedIcon className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">All the patients</span>
      </div>
    </div>
  );
}
