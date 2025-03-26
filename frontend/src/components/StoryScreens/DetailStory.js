import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";

const Story = ({ story }) => {
  const {
    trackingId,
    content,
    address,
    packageName,
    weight,
    status,
    location,
    carrier,
    time,
  } = story;

  return (
    <Styles>
      <Container fluid className="story-container">
        <Container className="story-content">
          <Row>
            <Col md="12">
              <h2 className="story-heading">Tracking Information</h2>
              <p className="tracking-id">
                Tracking ID: <span style={{textTransform: 'uppercase'}}>{trackingId}</span>
              </p>
            </Col>
          </Row>

          <Row className="story-details">
            <Col md="6">
              <h4>Package Details</h4>
              <p><strong>Receiver's Name:</strong> {content}</p>
              <p><strong>Receiver's Address:</strong> {address}</p>
              <p><strong>Package Type:</strong> {packageName}</p>
              <p><strong>Package Weight:</strong> {weight}</p>
            </Col>
            <Col md="6">
              <h4>Transit Information</h4>
              <p><strong>Current Status:</strong> {status}</p>
              <p><strong>Last recorded Location:</strong> {location}</p>
              <p><strong>Carrier:</strong> {carrier}</p>
              <p><strong>Expected Delivery:</strong> {time}</p>
            </Col>
          </Row>

          <Row className="additional-info">
            <Col md="12">
              <h4>Additional Information</h4>
              <p className="notes">
                <strong>Delivery Notes:</strong> Please ensure someone is available to receive the package. Contact customer service for specific delivery preferences or instructions.
              </p>
              <p className="notes">
                <strong>Proof of Delivery:</strong> A signature will be required upon delivery. Proof of delivery will be available in our tracking portal.
              </p>
              <p className="notes">
                <strong>Exception Notifications:</strong> You will receive notifications for any delivery issues or exceptions. Contact customer service for further assistance.
              </p>
              <p className="notes">
                <strong>Insurance Information:</strong> Shipment insurance is required. Refer to our insurance policy for details.
              </p>
              <p className="notes">
                <strong>Weather Conditions:</strong> Weather conditions may impact delivery schedules. We monitor updates to minimize disruptions.
              </p>
              <p className="contact-info">
                <strong>Contact Information:</strong> For inquiries, contact our support at reliabletransportandlogisticsi@gmail.com. Visit our tracking portal for real-time updates and additional information.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Styles>
  );
};

Story.propTypes = {
  story: PropTypes.shape({
    trackingId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    packageName: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    carrier: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default Story;

const Styles = styled.div`
  .story-container {
    background-color: #f4f5f7;
    padding: 50px 0;
    font-family: Arial, sans-serif;
  }

  .story-content {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .story-heading {
    font-size: 2rem;
    font-weight: bold;
    color: #343a40;
    margin-bottom: 20px;
    text-align: center;
  }

  .tracking-id {
    font-size: 1.2rem;
    color: #495057;
    text-align: center;
    margin-bottom: 40px;
    text-transform: uppercase;
  }

  .tracking-id span {
    font-weight: bold;
    color: #007bff;
  }

  .story-details h4 {
    font-size: 1.5rem;
    color: #343a40;
    margin-bottom: 20px;
  }

  .story-details p {
    font-size: 1.1rem;
    color: #495057;
    margin-bottom: 10px;
  }

  .additional-info h4 {
    font-size: 1.5rem;
    color: #343a40;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .notes {
    font-size: 1.1rem;
    color: #495057;
    margin-bottom: 10px;
  }

  .contact-info {
    font-size: 1.1rem;
    color: #495057;
    margin-top: 20px;
  }
`;
