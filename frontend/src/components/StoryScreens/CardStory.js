import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import pin from '../../Assets/pin.png'

const customIcon = new L.Icon({
  iconUrl: pin, // Replace with the actual URL of the custom marker icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Story = ({ story }) => {
  const hasValidCoordinates = !isNaN(story.lat) && !isNaN(story.long);

  // Log coordinates for debugging
  console.log("Coordinates:", story.lat, story.long);

  return (
    <Styles>
      <Container fluid className="story-container">
        <Container className="story-content">
          <Row>
            <Col md="12">
              <h2 className="story-heading">Tracking Information</h2>
              <p className="tracking-id">
                Tracking ID: <span>{story.title}</span>
              </p>
            </Col>
          </Row>

          <Row className="story-details">
            <Col md="6">
              <h4>Package Details</h4>
              <p><strong>Receiver's Name:</strong> {story.content || "N/A"}</p>
              <p><strong>Receiver's Address:</strong> {story.address || "N/A"}</p>
              <p><strong>Package Name:</strong> {story.packageName || "N/A"}</p>
              <p><strong>Package Weight:</strong> {story.weight || "N/A"}</p>
            </Col>
            <Col md="6">
              <h4>Transit Information</h4>
              <p><strong>Current Status:</strong> {story.status || "N/A"}</p>
              <p><strong>Last Recorded Location:</strong> {story.location || "N/A"}</p>
              <p>
              </p>
              <p><strong>Carrier:</strong> {story.carrier || "N/A"}</p>
              <p><strong>Expected Delivery:</strong> {story.time || "N/A"}</p>
            </Col>
          </Row>

          <Row className="map-section">
            <Col md="12">
              <h4>Package Location on Map</h4>
              {hasValidCoordinates ? (
                <MapContainer
                  center={[story.lat, story.long]}
                  zoom={13}
                  style={{ height: '400px', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                  />
                  <Marker position={[story.lat, story.long]} icon={customIcon}>
                    <Popup>
                      Package current location: {story.location || "Unknown"}
                    </Popup>
                  </Marker>
                </MapContainer>
              ) : (
                <p>Location information is not available.</p>
              )}
            </Col>
          </Row>

          <Row className="additional-info">
            <Col md="12">
              <h4>Additional Information</h4>
              {story.lat}, {story.long}
              <p className="notes"><strong>Delivery Notes:</strong> Please ensure someone is available to receive the package...</p>
              <p className="notes"><strong>Proof of Delivery:</strong> A signature will be required upon delivery...</p>
              <p className="notes"><strong>Exception Notifications:</strong> You will receive notifications for any delivery issues...</p>
              <p className="notes"><strong>Insurance Information:</strong> Shipment insurance is required...</p>
              <p className="notes"><strong>Weather Conditions:</strong> Weather conditions may impact delivery schedules...</p>
              <p className="contact-info"><strong>Contact Information:</strong> For inquiries, contact our support at <a href="mailto:albatrossexpresssuport@gmail.com">albatrossexpresssuport@gmail.com</a>.</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Styles>
  );
};

Story.propTypes = {
  story: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
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
  .map-section {
    margin-top: 40px;
  }
  .contact-info {
    font-size: 1.1rem;
    color: #495057;
    margin-top: 20px;
  }
`;
