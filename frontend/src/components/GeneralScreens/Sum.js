// Install styled-components if you haven't already
// npm install styled-components

import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  color: #2a9d8f;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Section = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: #fff;
  border-left: 4px solid #2a9d8f;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #264653;
  margin-bottom: 0.5rem;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  background-color: #2a9d8f;
  color: #fff;
  text-decoration: none;
  border-radius: 20px;
  transition: background 0.3s;
  
  &:hover {
    background-color: #21867a;
  }
`;

const Sum = () => {
  return (
    <SummaryContainer>
      <Header>Albatross Logistics - Safe & Reliable Delivery Solutions</Header>

      <Section>
        <SectionTitle>Efficient Delivery</SectionTitle>
        <SectionContent>
          Albatross provides enhanced logistics operations for efficient and safe cargo delivery, including specialized pet transport services. Our goal is to take the stress out of freight forwarding for our clients.
        </SectionContent>
        <Button href="#learn-more">Learn More</Button>
      </Section>

      <Section>
        <SectionTitle>Transparent Pricing</SectionTitle>
        <SectionContent>
          With our transparent pricing model, there are no hidden costs, even for specialized pet and cargo delivery services.
        </SectionContent>
        <Button href="#learn-more">Learn More</Button>
      </Section>

      <Section>
        <SectionTitle>Security for Pets</SectionTitle>
        <SectionContent>
          Our facilities and procedures meet the highest standards of security, ensuring that pets are handled with utmost care during transport.
        </SectionContent>
        <Button href="#learn-more">Learn More</Button>
      </Section>

      <Section>
        <SectionTitle>Warehouse Storage</SectionTitle>
        <SectionContent>
          Albatross provides safe and specialized storage solutions to ensure the safety and comfort of goods and pets in our care.
        </SectionContent>
        <Button href="#learn-more">Learn More</Button>
      </Section>

      <Section>
        <SectionTitle>Our Key Features</SectionTitle>
        <SectionContent>
          - Real-Time Tracking<br />
          - 24/7 Support<br />
          - Easy Payment Methods<br />
          - Fast & Efficient Delivery
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>About Us</SectionTitle>
        <SectionContent>
          Albatross Inc. is a leading logistics operator, specializing in the safe and efficient delivery of goods. We offer a full range of services in customs clearance and transportation worldwide for both pets and cargo. Our skilled team, supported by advanced tracking and processing software, ensures safe, efficient transport for your needs.
        </SectionContent>
      </Section>
    </SummaryContainer>
  );
};

export default Sum;
