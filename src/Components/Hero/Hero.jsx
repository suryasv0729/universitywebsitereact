import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Oxford ensure better education for a better world.</h1>
        <p>
          our cutting edge curriculumn to empower students with good real life
          practical konowldedge ,experiences needed to exel in the real world
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
