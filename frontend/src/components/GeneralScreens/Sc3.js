import React from 'react';
import './Sc3.css';
import bo1 from '../../Assets/bo1.jpg';  // Ensure correct path
import bo2 from '../../Assets/bo2.jpg';  // Ensure correct path
import bo3 from '../../Assets/bo3.jpg';  // Ensure correct path
import { Col, Row } from 'react-bootstrap';

function ArticleCard({ image, title, description }) {
  return (
    <div className="article-card">
      <div className="article-image-container">
        <img src={image} alt={title} className="article-image" />
      </div>
      <div className="article-content">
        <h3 className="article-title">{title}</h3>
        <p className="article-description">{description}</p>
        <a href="/summary" className="article-link">Know More &rarr;</a>
      </div>
    </div>
  );
}

function Articles() {
  const articles = [
    {
      image: bo1,
      title: "Cargo Flow Through Better Supply Chain Visibility Control",
      description: "Enhancing Cargo Flow: Transforming Logistics Through Better Supply Chain Visibility Control At Albatross..."
    },
    {
      image: bo2,
      title: "New Additions To Our Great Metro Trucks Fleet",
      description: "Exciting News from Albatross: Introducing Our New Metro Trucks Fleet! At Albatross, we’re..."
    },
    {
      image: bo3,
      title: "The New Driver Training Recruitment Program",
      description: "Introducing Albatross’s New Driver Training Recruitment Program! At Albatross, we’re committed to excellence..."
    }
  ];

  return (
    <div className="articles-section">
      <div className="section-header">
        <span className="section-category">Insights and Trends</span>
        <h2 className="section-title">Recent Articles</h2>
      </div>
      <Row className="articles-container">
        {articles.map((article, index) => (
          <Col md={4} key={index}>
            <ArticleCard 
              image={article.image}
              title={article.title}
              description={article.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

function Sc3() {
  return (
    <div className="App">
      <Articles />
    </div>
  );
}

export default Sc3;
