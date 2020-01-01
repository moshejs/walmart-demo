import "./Hero.scss";
import Dropdown from "../Dropdown/Dropdown";

const Hero = props => (
  <div className="heroContainer">
    <div className="heroTitle">
      <h1>Dog Toys</h1>
      <h2>For Good Girls &amp; Boys</h2>
    </div>
    <Dropdown />
  </div>
);

export default Hero;
