import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/tracking?search=${searchTerm}`);
    }

    setSearchTerm("");
  };

  return (
    <Styles>
      <Col md="5" className="container">
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ padding: "30px", fontSize: "1.3rem", color: "sandybrown" }}
          />
        </Link>
        <form className="form" onSubmit={handleSubmit}>
          <div
            style={{
              fontWeight: "600",
              letterSpacing: "3px",
              fontSize: "1rem",
            }}
          >
            Ex: B10375hd93VGH
          </div>
          <input
            autoFocus={false}
            type="text"
            pattern=".{13}"
            required
            className="forms"
            placeholder="Please Input your Courier ID"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button type="submit" className="butt">
            Submit
          </button>
        </form>
      </Col>
    </Styles>
  );
};

export default SearchForm;

const Styles = styled.div`
  overflow-x: hidden;
  padding-top: 5vh;
  background: aliceblue;
  .forms {
    width: 100%;
    padding: 10px;
    box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
    background: none;
    border: none;
  }
  .butt {
    border: none;
    border-radius: 5px;
    width: 130px;
    height: 60px;
    margin: 60px;
    background: #165153;
    color: aliceblue;
    font-weight: 1000;
    font-size: 18px;
    &:hover {
      color: aliceblue;
    }
  }
  .forms {
    background: whitesmoke;
    box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
    &:focus {
      border: 1px solid grey;
    }
  }
`;
