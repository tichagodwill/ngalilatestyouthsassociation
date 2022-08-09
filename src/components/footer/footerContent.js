import React from "react";
import styled from "styled-components";
import "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.div`
  .footer {
    background: linear-gradient(#e66465, #9198e5);
    color: blue;
    width: 100%;
    height: 300px;
    position: relative;
    @media (max-width: 678px) {
      background: linear-gradient(#e66465, #9198e5);
      height: 800px;
      position: relative;
    }
  }

  .btn-big {
    padding: 0.3rem 0.6rem;
    line-height: 0.3rem;
  }

  .footer .footer-content {
    height: 100px;
    display: flex;
    @media (max-width: 678px) {
      display: flex;
      flex-flow: column;
      align-items: center;
    }
  }
  .footer .footer-content .footer-section {
    flex: 1;
  }

  .footer .footer-content h1 {
    color: white;
    margin-left: 5px;
  }
  .footer .footer-content h2 {
    color: white;
    margin-left: 50px;
    @media (max-width: 678px) {
      margin-top: 20px;
      margin-left: 25px;
    }
  }

  .footer .footer-content .about h1 span {
    color: #05f7ff;
  }
  .footer .footer-content .about h1 {
    @media (max-width: 678px) {
      text-align: center;
      font-size: 25px;
    }
  }
  .footer .footer-content .about .contact {
    @media (max-width: 678px) {
      text-align: center;
      font-size: 20px;
    }
  }
  .footer .footer-content .about .contact span {
    display: block;
    font-size: 1.1em;
    margin-bottom: 8px;
  }
  .footer .footer-content .about .contact p {
    margin-left: 8px;
  }

  .footer .footer-content .about .socials a {
    border: 1px solid gray;
    width: 45px;
    height: 41px;
    padding-top: 5px;
    margin-right: 5px;
    text-align: center;
    display: inline-block;
    font-size: 1.3em;
    border-radius: 5px;
    margin-left: 5px;
    @media (max-width: 678px) {
      margin-left: 30px;
      align-items: center;
      margin: 2px;
      align-items: center;
    }
  }

  .footer .footer-content .about .socials a:hover {
    color: white;
    border: 1px solid white;
    transition: all 0.4s;
    @media (max-width: 678px) {
      color: white;
      border: 1px solid white;
      transition: all 0.4s;
    }
  }

  .footer .footer-content .links ul a {
    display: block;
    margin-bottom: 10px;
    font-size: 1.2em;
    text-decoration: none;
    transition: all 0.3s;
    margin-left: 50px;
    @media (max-width: 678px) {
      margin-left: 25px;
    }
  }

  .footer .footer-content .links ul a:hover {
    color: white;
    margin-left: 15px;
    transition: all 0.3s;
  }
  .footer .footer-content .about .contact {
    margin-left: 5px;
  }

  .footer .footer-content .contact-form .contact-input {
    background-color: #9198e5;
    color: #bebdbd;
    margin-bottom: 20px;
    line-height: 1.5rem;
    padding: 0.7rem 1.2rem;
    border: none;
    @media (max-width: 678px) {
      margin: 10px;
      display: flex;
      flex-flow: column;
    }
  }
  .footer .footer-content .contact-form .contact-input:focus {
    background: darkgreen;
  }

  .footer .footer-content .contact-form h2 {
    margin-top: 20px;
    @media (max-width: 678px) {
      margin-left: 80px;
    }
  }
  .footer .footer-bottom {
    width: 100%;
    position: absolute;
    bottom: 0px;
    padding-top: 20px;
    @media (max-width: 678px) {
      position: relative;
      bottom: 0px;
      color: aliceblue;
    }
  }
`;

const footerContent = () => {
  return (
    <StyledFooter>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h1 className="logo-text">
              <span> NgaliLatest</span>YouthsAssociation
              <br />
              Motto: Unity is power
            </h1>

            <div className="contact">
              <span>
                {" "}
                <FontAwesomeIcon icon={faPhone} /> &nbsp; 123 45 453
              </span>
              <span>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} /> &nbsp; nlya@gmail.com
              </span>
            </div>
            <div className="socials">
              <a href="#">
                {" "}
                <FontAwesomeIcon icon={faYoutube} />{" "}
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon icon={faFacebook} />{" "}
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon icon={faInstagram} />{" "}
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon icon={faTiktok} />{" "}
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon icon={faSnapchat} />{" "}
              </a>
            </div>
          </div>

          <br />
          <div className="footer-section links">
            <br />

            <h2> Quicklinks</h2>
            <br />
            <ul className="ml4">
              <a href="#">
                {" "}
                <li> Events</li>{" "}
              </a>
              <a href="#">
                {" "}
                <li> Team</li>{" "}
              </a>
              <a href="#">
                {" "}
                <li> Mentors</li>{" "}
              </a>
              <a href="#">
                {" "}
                <li> Gallery</li>{" "}
              </a>
              <a href="#">
                {" "}
                <li> Join us</li>{" "}
              </a>
            </ul>
          </div>

          <div className="footer-section contact-form">
            <h2> Contact Us</h2>
            <br />
            <form action="index.html" method="post" className="ml3">
              <input
                type="email"
                name="email"
                className="text-input contact-input"
                placeholder="Enter your email here"
              />

              <textarea
                className="tex-input contact-input"
                placeholder="Enter message here!"
              />
              <br />
              <button type="submit" className="btn btn-big contact-btn ">
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp; Send
              </button>
            </form>
          </div>

          <div className="footer-bottom tc">
            <span>&copy; NLYA | Design by Ticha Godwill </span>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default footerContent;
