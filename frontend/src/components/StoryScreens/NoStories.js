import React from "react";
import { Col } from "react-bootstrap";

const NoStories = () => (
  <center>
    <Col md="5">
      <p style={{ fontSize: "1.5rem", fontWeight: "800" }}>
        Sorry, No package was found with that Courier ID
      </p>
      <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>
        Please Check your ID and try again.
      </p>
      <p style={{ fontSize: "1.2rem", fontWeight: "400" }}>
        If you still cannot find your package, please quickly contact our
        customer support service, we will solve your issue as soon as possible
      </p>
    </Col>
  </center>
);

export default NoStories;
