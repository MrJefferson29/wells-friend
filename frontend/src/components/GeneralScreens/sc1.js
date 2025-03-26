import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import g2 from "../../Assets/g2.jpg";
import co1 from "../../Assets/co1.png";
import co2 from "../../Assets/co2.png";
import co3 from "../../Assets/co3.png";
import co4 from "../../Assets/co4.png";
import b1 from "../../Assets/b1.jpg";
import vid from '../../Assets/vid.mp4';
import j1 from '../../Assets/j1.jpeg';
import Sc2 from './Sc2';

export default function Sc1() {
  return (
    <Styles>
      <HeroSection>
        <TextCol md="6">
          <MainHeading>Safe and Reliable Delivery & Logistics Solutions</MainHeading>
          <SubHeading>
            Providing flexible, improved service levels, and accelerated pet delivery with utmost care!
          </SubHeading>
        </TextCol>
        <ImageCol md="6">
          {/* <StyledVideo controls>
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo> */}
          <img src={j1} style={{width: '100%'}} />
        </ImageCol>
      </HeroSection>
      <FeatureSection>
        <Col md="3">
          <Card>
            <img src={co1} className="icon" alt="Efficient Delivery" />
            <h3>Efficient Pet Delivery</h3>
            <p>
              We enhance our logistics operations to ensure safe and efficient delivery of cargo, relieving you of the worries associated with freight forwarding.
            </p>
            <a href="/summary" className="learn-more">Learn More</a>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <img src={co2} className="icon" alt="Transparent Pricing" />
            <h3>Transparent Pricing</h3>
            <p>
              Our transparent pricing model ensures there are no hidden costs, even for specialized pet & cargo delivery services.
            </p>
            <a href="/summary" className="learn-more">Learn More</a>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <img src={co3} className="icon" alt="Security For Pets" />
            <h3>Secure Pet Handling</h3>
            <p>
              Our facilities and procedures meet high security requirements, ensuring your pets are handled with the utmost care and are transported safely.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <img src={co4} className="icon" alt="Warehouse Storage" />
            <h3>Safe Storage</h3>
            <p>
              We offer specialized storage solutions for goods, ensuring their safety and comfort while in our care.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </Card>
        </Col>
      </FeatureSection>
      <InfoSection>
        <Col md="6">
          <center>
            <StyledImage src={b1} alt="Logistics Solutions" />
          </center>
        </Col>
        <Col md="6">
          <InfoHeading>
            Safe, Reliable, and Express Delivery & Transport Solutions That Save Your Time!
          </InfoHeading>
          <InfoText>
            Albatross Inc. is a leading logistics operator specializing in the safe and efficient delivery of goods. We provide a full range of services in customs clearance and transportation worldwide for pets and any type of cargo.
            <br />
            <br />
            Our commitment to delivering the best transport and shipping services extends to our pet delivery solutions. Our skilled personnel, utilizing the latest tracking and processing software combined with decades of experience, ensure your pets are transported safely and efficiently. Through integrated supply chain solutions, Seaborne Freight & Albatross Inc. drive sustainable competitive advantages for some of the world’s largest companies.
            <br />
            <br />
            <ul className="custom-list">
              <li>Real-Time Tracking</li>
              <li>24/7 Hours Support</li>
              <li>Easy Payment Methods</li>
              <li>Fast & Efficient Delivery</li>
            </ul>
          </InfoText>
        </Col>
      </InfoSection>
      <Sc2 />
    </Styles>
  );
}

const Styles = styled.div`
  overflow-x: hidden;
`;

// Main Hero Section styling
const HeroSection = styled(Row)`
  background-color: #165153;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

// Text Column styling
const TextCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;

  @media (min-width: 768px) {
    text-align: left;
    padding: 20px 40px;
  }
`;

// Main Heading
const MainHeading = styled.h1`
  color: aliceblue;
  font-weight: 900;
  font-size: 3.5rem;
  margin: 20px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 767px) {
    font-size: 3rem;
  }
`;

// Sub Heading
const SubHeading = styled.h1`
  color: aliceblue;
  font-weight: 700;
  font-size: 2rem;
  margin: 20px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

// Image Column styling (with video embedded)
const ImageCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;

// Enhanced styling for the video element
const StyledVideo = styled.video`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  outline: none;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const FeatureSection = styled(Row)`
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 5vh;
`;

// Card Component Styling
const Card = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .icon {
    width: 100px;
  }

  h3 {
    margin: 20px 0 10px;
    font-size: 1.4rem; /* Increased font size for better visibility */
  }

  p {
    color: #666;
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .learn-more {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    border-bottom: 2px solid #f97316;
    padding-bottom: 2px;
  }
`;

const InfoSection = styled(Row)`
  margin-top: 50px;
  padding: 0 5vh;
`;

const InfoHeading = styled.h1`
  color: black;
  font-weight: 800;
  font-size: 2.4rem;
  margin: 20px;

  @media (min-width: 768px) {
    font-size: 3.4rem;
  }

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

const InfoText = styled.p`
  color: black;
  font-size: 1rem;
  margin: 20px;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 767px) {
    font-size: 0.9rem;
  }

  .custom-list {
    list-style: none;
    padding-left: 0;
  }

  .custom-list li {
    margin-bottom: 10px;
    padding-left: 30px;
    position: relative;
    font-weight: 600;
  }

  .custom-list li::before {
    content: "✔";
    color: pink;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
