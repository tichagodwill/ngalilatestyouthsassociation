import React from "react";
import styled from "styled-components";
import { members } from "./members";
import "tachyons";

const Title = styled.div`
  background-color: green;
`;
const Wrapper = styled.h1`
  background-color: green;
  margin-bottom: 2em;
`;

const Cards = () => {
  return (
    <div className="tc">
      <Wrapper>
        <h1 className=" grow color= white"> Leadership Board</h1>
      </Wrapper>
      {members.map((elem) => {
        const { image, name, position, email } = elem;
        return (
          <Title className="  grow  dib tc ma2 pa2 br4 ">
            <img src={image} alt="photo" width="300" height="300" />

            <div>
              <h1> {name} </h1>
              <h2> {position} </h2>
              <h3> {email}</h3>
            </div>
          </Title>
        );
      })}
    </div>
  );
};

export default Cards;
