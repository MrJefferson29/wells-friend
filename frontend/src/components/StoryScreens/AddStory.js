import React, { useRef, useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { FiArrowLeft } from "react-icons/fi";
import "../../Css/AddStory.css";
import { Row, Col } from "react-bootstrap";

const AddStory = () => {
  const { config } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [weight, setWeight] = useState("");
  const [packageName, setPackageName] = useState("");
  const [location, setLocation] = useState("");
  const [carrier, setCarrier] = useState("");
  const [time, setTime] = useState("");
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const clearInputs = () => {
    setTitle("");
    setContent("");
    setAddress("");
    setStatus("");
    setWeight("");
    setPackageName("");
    setLocation("");
    setCarrier("");
    setTime("");
    setLong("");
    setLat("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      content,
      address,
      status,
      weight,
      packageName,
      location,
      carrier,
      time,
      long,
      lat,
    };

    try {
      const { data } = await axios.post(
        "https://ilan.onrender.com/story/addstory",
        formData,
        config
      );
      setSuccess("Story added successfully");
      clearInputs();

      setTimeout(() => {
        setSuccess("");
      }, 7000);
    } catch (error) {
      setError(error.response?.data?.error || "An error occurred");
      setTimeout(() => {
        setError("");
      }, 7000);
    }
  };

  return (
    <div className="Inclusive-addStory-page ">
      <Link to={"/"}>
        <FiArrowLeft />
      </Link>
      <form onSubmit={handleSubmit} className="addStory-form">
        {error && <div className="error_msg">{error}</div>}
        {success && (
          <div className="success_msg">
            <span>{success}</span>
            <Link to="/">Go home</Link>
          </div>
        )}
        <Row>
          <Col md="6">
            <input
              className="inp"
              type="text"
              id="title"
              required
              placeholder="Tracking ID (13 Characters)"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              autoFocus={true}
            />
            <input
              className="inp"
              type="text"
              required
              id="address"
              placeholder="Receiver's address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <input
              className="inp"
              type="text"
              required
              id="time"
              placeholder="When will it be received (Example: 3 days)"
              onChange={(e) => setTime(e.target.value)}
              value={time}
            />
          </Col>
          <Col md="6">
            <input
              className="inp"
              type="text"
              id="content"
              placeholder="Receiver's Name"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            <select
              className="inp"
              required
              id="status"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option value="" disabled>
                Select Package Status
              </option>
              <option value="transit">On Transit</option>
              <option value="delivered">Delivered</option>
              <option value="delayed">Delayed</option>
              <option value="denied">Denied</option>
            </select>
            <input
              className="inp"
              type="text"
              id="packageName"
              placeholder="Package Type"
              onChange={(e) => setPackageName(e.target.value)}
              value={packageName}
            />
            <input
              className="inp"
              type="text"
              id="weight"
              placeholder="Package Weight"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
            <input
              className="inp"
              type="text"
              id="location"
              placeholder="Last recorded Location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
            <input
              className="inp"
              type="text"
              id="long"
              placeholder="Give the longitude location"
              onChange={(e) => setLong(e.target.value)}
              value={long}
            />
            <input
              className="inp"
              type="text"
              id="lat"
              placeholder="Give the latitude location"
              onChange={(e) => setLat(e.target.value)}
              value={lat}
            />
            <select
              className="inp"
              required
              id="carrier"
              onChange={(e) => setCarrier(e.target.value)}
              value={carrier}
            >
              <option value="" disabled>
                Select Delivery Agency
              </option>
              <option value="UPS">UPS</option>
              <option value="FedEx">FedEx</option>
              <option value="USPS">USPS</option>
              <option value="DHL">DHL</option>
              <option value="UShip">UShip</option>
            </select>
          </Col>
        </Row>
        <button type="submit" className="addStory-btn">
          Publish
        </button>
      </form>
    </div>
  );
};

export default AddStory;
