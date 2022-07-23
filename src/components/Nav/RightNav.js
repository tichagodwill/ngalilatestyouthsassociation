import React from "react";
import styled from "styled-components";
import "tachyons";

const clickMe = () => {
  alert("Thank you for joining us, contact the SG for more details!");
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 20px 10px;
    &:hover {
      color: white;
      cursor: pointer;
    }
    &:nth-child(4) {
      background-color: violet;
      height: 33px;
      border-radius: 5px;
      margin-top: 13px;
      padding: 5px;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #74992e;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    width: 200px;
    height: 100vh;
    padding-top: 3px;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    li:nth-child(4) {
      width: 80px;
    }
  }
  li:hover {
    color: white;
    cursor: pointer;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home </li>
      <li>Services </li>
      <li>Contact us </li>
      <li onClick={clickMe}>Join us </li>
    </Ul>
  );
};

export default RightNav;
