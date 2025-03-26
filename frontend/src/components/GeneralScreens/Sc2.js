import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import v1 from "../../Assets/v1.jpg";
import v2 from "../../Assets/v2.jpg";
import v3 from "../../Assets/v3.jpg";
import Team from "./Team";
import TestimonialSlider from "./Testimonials";
import Sc3 from "./Sc3";
import vid from "../../Assets/vid.mp4";
import vid2 from "../../Assets/vid2.mp4";

export default function Sc2() {
  const cardData = [
    {
      imgSrc: v1,
      alt: "Warehouse Inventory",
      title: "Warehouse on Hand Inventory",
      description: `Albatross, a distinguished logistics company, meticulously
                    manages its warehouse on-hand inventory to ensure efficiency,
                    accuracy, and seamless operations, providing both package and
                    pet delivery services to enhance customer satisfaction.`
    },
    {
      imgSrc: v2,
      alt: "Minimize Manufacturing Costs",
      title: "Minimize Cost of Manufacturing",
      description: `Albatross, a forward-thinking logistics company, strategically
                    reduces manufacturing costs through innovation, ensuring
                    competitive rates for both cargo and pet transportation.`
    },
    {
      imgSrc: v3,
      alt: "Documents & Electronic Data",
      title: "Documents & Electronic Data",
      description: `Albatross exemplifies efficiency in managing documents and
                    electronic data through a robust system tailored to the
                    complexities of the shipping and transportation industry,
                    including pet logistics.`
    }
  ];

  const additionalArticles = [
    {
      title: "Efficient Last-Mile Delivery Solutions",
      description: `Discover how Albatross optimizes last-mile delivery to reduce costs and improve customer satisfaction.`
    },
    {
      title: "Technological Advances in Delivery",
      description: `Exploring the latest innovations that make Albatross a leader in modern delivery solutions.`
    },
    {
      title: "Eco-Friendly Packaging for Sustainable Delivery",
      description: `Learn about Albatross's commitment to sustainability with eco-friendly packaging initiatives.`
    }
  ];

  return (
    <Styles>
      <Row className="card-grid">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imgSrc} alt={card.alt} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.description}</p>
              <a
                href="summary"
                className="card-button"
                aria-label={`Read more about ${card.title}`}
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </Row>

      <Row className="additional-articles">
        <h3>More Articles on Delivery Innovations</h3>
        {additionalArticles.map((article, index) => (
          <Col md="4" key={index}>
            <div className="article-card">
              <h4 className="article-title">{article.title}</h4>
              <p className="article-description">{article.description}</p>
              <a href="/summary" className="article-button">
                Read More
              </a>
            </div>
          </Col>
        ))}
      </Row>

      <Row className="video-section">
        <h3>Delivery Insights & Tips</h3>
        <Col md="6">
          <StyledVideo controls>
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </Col>
      </Row>

      <Row>
        <div className="hero-container">
          <div className="hero-content">
            <h3>Your Package, Your Pet, Your Rules</h3>
            <h1>
              The Best Possible Service In The Sphere Of Optimized Route Of
              Cargo, Pet, & Transportation Worldwide
            </h1>
            <button className="hero-button">Schedule an Appointment</button>
          </div>
        </div>
      </Row>

      <Row className="team-section">
        <Col xs={12} className="team-container">
          <h3>Meet Our Management Team</h3>
          <Team />
        </Col>
      </Row>

      <Row className="yela">
        <h3>What they say about us</h3>
        <TestimonialSlider />
      </Row>

      {/* Second Video Section */}
      <Row className="video-section">
        <Col md="6">
          <StyledVideo controls>
            <source src={vid2} type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </Col>
      </Row>

      <Row>
        <Sc3 />
      </Row>
    </Styles>
  );
}

const Styles = styled.div`
  /* Card Styling */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    max-width: 400px;
    margin: 20px auto;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 3px solid #f97316;
  }

  .card-content {
    padding: 20px;
  }

  .card-title {
    font-size: 26px;
    color: #165153;
    margin-bottom: 12px;
  }

  .card-description {
    font-size: 17px;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.5;
    font-weight: 500;
  }

  .card-button {
    background-color: #f97316;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    display: inline-block;
  }

  .card-button:hover,
  .card-button:focus {
    background-color: #ea640a;
    text-decoration: none;
  }

  /* Additional Articles */
  .additional-articles {
    padding: 40px 0;
    text-align: center;
  }

  .article-card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px 0;
    transition: transform 0.2s;
  }

  .article-card:hover {
    transform: translateY(-5px);
  }

  .article-title {
    font-size: 20px;
    color: #165153;
    margin-bottom: 10px;
  }

  .article-description {
    font-size: 16px;
    color: #555;
    line-height: 1.5;
  }

  /* Video Section */
  .video-section {
    padding: 40px 0;
    text-align: center;
  }

  .video-container {
    position: relative;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    height: 0;
    overflow: hidden;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  /* Hero Section Styling */
  .hero-container {
    background-image: url("your-image-source.jpg");
    background-size: cover;
    background-position: center;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    color: #fff;
    position: relative;
    overflow: hidden;
  }

  .hero-container::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    );
  }

  .hero-content {
    position: relative;
    z-index: 1;
    background-color: rgba(22, 81, 83, 0.9);
    padding: 30px;
    border-radius: 10px;
    max-width: 700px;
    text-align: center;
  }

  /* Team and Testimonials Sections */
  .team-section,
  .yela {
    padding: 40px 0;
    text-align: center;
    background-color: #f0f4f8;
  }

  h3 {
    color: #333;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .hero-button {
    background-color: #f97316;
    color: white;
    padding: 15px 25px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    transition: background-color 0.3s ease;
    text-transform: uppercase;
  }

  .hero-button:hover {
    background-color: #ea640a;
  }
`;
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
