import React, { useState } from "react";
import Popup from "reactjs-popup";
import Socials from "./socials";
import "./badges.scss";


export default function Badges() {
    return (
      <>
        <div className="personalmain">
        <div className="card1">
          <div className="left">
            <h3>This is a badge Look</h3>
            <p>
              {" "}
              Your total:<strong>100</strong>
            </p>
            <p>
              Next Threshold:<strong>100</strong>
            </p>
          </div>

          <div className="right">
            <Popup
              trigger={
                <img
                  src="https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-05-512.png"
                  alt="children served icon"
                />
              }
              contentStyle={{
                width: "10rem",
                height: "11rem",
                background: "black"
              }}
              position=" center center"
            >
              <div>
                <Socials
                  url="https://impact-dashboard.mjherich.now.sh/personal"
                  text="Check out this website"
                />
]              </div>
            </Popup>
          </div>
        </div>
        <div className="card2">
          <div className="left">
            <h3>This is a badge Look</h3>
            <p>
              {" "}
              Your total:<strong>100</strong>
            </p>
            <p>
              Next Threshold:<strong>100</strong>
            </p>
          </div>

          <div className="right">
            <Popup
              trigger={
                <img
                  src="https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-05-512.png"
                  alt="connections discovered icon"
                />
              }
              contentStyle={{
                width: "10rem",
                height: "21rem",
                background: "black"
              }}
              position=" center center"
            >
              <Socials
                url="www.connectourkids.org"
                text="Check out this website: www.google.com"
              />
            </Popup>
          </div>
        </div>

        <div className="card3">
          <div className="left">
            <h3>This is a badge Look</h3>
            <p>
              {" "}
              Your total:<strong>100</strong>
            </p>
            <p>
              Next Threshold:<strong>100</strong>
            </p>
          </div>

          <div className="right">
            <Popup
              trigger={
                <img
                  src="https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-05-512.png"
                  alt="engagemnets events icon"
                />
              }
              contentStyle={{
                width: "10rem",
                height: "11rem",
                background: "black"
              }}
              position=" center center"
            >
              <Socials
                url="www.connectourkids.org"
                text="Check out this website: www.google.com"
              />
            </Popup>
          </div>
        </div>
      </div>
    </>
  );
}
