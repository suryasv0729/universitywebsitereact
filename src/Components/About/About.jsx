import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing tomorrows leaders today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          explicabo? Nihil eos ipsum ea dolorem officia vel dolore nostrum?
          Maiores harum commodi blanditiis officia ut nihil, dolorum excepturi
          neque cumque?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          nemo, ullam placeat alias accusamus recusandae tempora eius,
          laboriosam .
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odio
          quam recusandae sunt consectetur labore velit consequuntur aliquam
          porro! Esse cum illo maiores repellat aperiam nobis unde modi
          consectetur quis.
        </p>
      </div>
    </div>
  );
};

export default About;
