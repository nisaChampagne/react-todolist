import React from "react";
import "./badges.scss";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton
} from "react-share";

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon
} from "react-share";

export default function Socials(props) {
  return (
    <div className="socialsContainer">
      <div className="socials">
        <FacebookShareButton url={props.url} className="buttons-facebook">
          <p className="socials-p">Facebook</p>
          <FacebookIcon
            size={30}
            round={true}
            logoFillColor={"black"}
            iconBgStyle={{ fill: "white" }}
          />
        </FacebookShareButton>
      </div>
      <div className="socials">
        <LinkedinShareButton
          url={props.url}
          windowWidth={750}
          windowHeight={600}
          className="buttons"
        >
          <p className="socials-p">Linkedin</p>

          <LinkedinIcon
            size={30}
            round={true}
            logoFillColor={"black"}
            iconBgStyle={{ fill: "white" }}
          />
        </LinkedinShareButton>
      </div>
      <div className="socials">
        <TwitterShareButton
          url={props.url}
          windowWidth={750}
          windowHeight={600}
          className="buttons"
        >
          <p className="socials-p">Twitter</p>
          <TwitterIcon
            size={30}
            round={true}
            logoFillColor={"black"}
            iconBgStyle={{ fill: "white" }}
          />
        </TwitterShareButton>
      </div>
      <div className="socials">
        <EmailShareButton
          url={props.url}
          subject="This is a cool subject"
          body={`Hey there plz share my link: ${props.url}`}
          windowWidth={750}
          windowHeight={600}
          className="buttons"
        >
          <p className="socials-p">Email</p>
          <EmailIcon
            size={30}
            round={true}
            logoFillColor={"black"}
            iconBgStyle={{ fill: "white" }}
          />
        </EmailShareButton>
      </div>
    </div>
  );
}
