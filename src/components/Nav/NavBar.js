import React from "react";
import "tachyons";
import styled from "styled-components";
import Burger from "./Burger";

const StyledNav = styled.nav`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  border: 2px solid green;
  background: linear-gradient(#e66465, #9198e5);
  position: sticky;
  top: 0;
  z-index: 2;

  .logo {
    margin-top: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 6px;
    padding: 20px 10px;
    margin-right: 20px;
    text-transform: uppercase;
    font-family: cursive;
    &:hover {
      color: white;
      cursor: pointer;
    }
  }
  .title {
    @media (max-width: 678px) {
      font-size: small;
      margin-top: 15px;
    }
  }
`;

const NavBar = () => {
  return (
    <StyledNav>
      <div className="logo fw9 ">
        <img
          alt="NLYA"
          src={process.env.PUBLIC_URL + "/pics/logo.jpeg"}
          width="90"
          height="80"
          className="br-100  mr3 grow"
        />
        <span className="title">
          NGALI LATEST YOUTHS ASSOCIATION
          <br />
          MOTTO: UNITY IS POWER.
        </span>
      </div>
      <Burger />
    </StyledNav>
  );
};

export default NavBar;
