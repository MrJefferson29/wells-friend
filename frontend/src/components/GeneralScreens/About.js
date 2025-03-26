import React from "react";
import { ReactDOM } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Sc2 from "./Sc2";

import i2 from "../../Assets/m2.jpeg";
import g6 from "../../Assets/m1.jpeg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Styels>
      <Sc2 />
    </Styels>
  );
}

const Styels = styled.div`
  overflow-x: hidden;
  .bttn {
    width: 200px;
    height: 70px;
    margin-top: 30px;
    border-radius: 3px;
    border: none;
    background: burlywood;
    font-size: 1.2rem;
    font-weight: 500;
    color: aliceblue;
    &:hover {
      opacity: 0.5;
    }
  }
  @media only screen and (max-width: 767px) {
    .imag {
      height: 70vh;
    }
  }
`;
