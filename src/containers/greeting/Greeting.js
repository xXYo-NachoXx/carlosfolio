import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <mark data-entity="person">{greeting.sub}</mark>
              </h1>
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Software Engineer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Full Stack Developer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("UI/UX Designer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("IT/Site Realibility Eng")
                      .pauseFor(200)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  A <mark data-entity="noun">Software Engineer</mark> who
                  thrives to <mark data-entity="verb"> projects </mark> in areas
                  like{" "}
                  <mark data-entity="skill">Full Stack Web Development</mark>{" "}
                  and a blend of{" "}
                  <mark data-entity="skill">
                    UX/UI design & Site realibility Knowledge
                  </mark>
                  to bring a solid design to top to botton on end to end Web
                  Apps
                </div>
              </span>
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
