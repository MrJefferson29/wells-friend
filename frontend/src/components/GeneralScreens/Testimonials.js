import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import arah from "../../Assets/arah.jpg"
import miller from "../../Assets/miller.jpeg"
import michael from "../../Assets/michael.jpeg"
import emily from "../../Assets/emily.jpeg"
import robert from "../../Assets/robert.jpeg"

// Testimonial data
const testimonials = [
  {
    name: "Sarah Gonzuella",
    feedback:
      "I’ve never felt more secure about shipping my packages! I love how they prioritize package care—everything always arrives in perfect condition. Highly recommend!",
    location: "New York, NY",
    imageUrl: arah, // Replace with actual image URL
    rating: 5,
  },
  {
    name: "Miller Temili",
    feedback:
      "Albatross truly sets the standard for delivery services. My packages always arrive on time, and I’m amazed at how careful they are with handling fragile items.",
    location: "Los Angeles, CA",
    imageUrl: miller, // Replace with actual image URL
    rating: 4.5,
  },
  {
    name: "Michael Harrington",
    feedback:
      "I’ve been using Albatross for all my deliveries. Their real-time tracking keeps me updated, and their 24/7 customer support has always been there to help me with any questions.",
    location: "Chicago, IL",
    imageUrl: michael, // Replace with actual image URL
    rating: 4,
  },
  {
    name: "Emily Davis",
    feedback:
      "Albatross is hands down the best delivery service I’ve used! I love that I can track my delivery in real-time, and their 24-hour support means I can always reach someone if I have a concern.",
    location: "Houston, TX",
    imageUrl: emily, // Replace with actual image URL
    rating: 5,
  },
  {
    name: "Robert Brown",
    feedback:
      "I can't praise Albatross enough for their exceptional service! The care they take with each package is evident—a top-tier service that I trust completely!",
    location: "Miami, FL",
    imageUrl: robert, // Replace with actual image URL
    rating: 4.5,
  },
];

// Helper function to render star ratings
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} color="#FFD700" />
      ))}
      {halfStar && <FaStarHalfAlt color="#FFD700" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} color="#FFD700" />
      ))}
    </>
  );
};

// Styled components
const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const TestimonialCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Feedback = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
  font-weight: 400;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Name = styled.h3`
  font-size: 1.3rem;
  color: #222;
  margin-bottom: 0.5rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Location = styled.p`
  font-size: 1rem;
  color: #888;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Container>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} aria-label={`Testimonial from ${testimonial.name}`}>
            <Stars>{renderStars(testimonial.rating)}</Stars>
            <ProfileImage src={testimonial.imageUrl} alt={`${testimonial.name}'s profile`} />
            <Feedback>"{testimonial.feedback}"</Feedback>
            <Name>{testimonial.name}</Name>
            <Location>{testimonial.location}</Location>
          </TestimonialCard>
        ))}
      </Slider>
    </Container>
  );
};

export default TestimonialSlider;