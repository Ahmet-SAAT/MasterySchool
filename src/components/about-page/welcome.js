import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <Container>
        <Row className="g-5">
          <Col md={6}>
            <Image src="/images/about/welcome.png" className="img-fluid" />
          </Col>

          <Col md={6}>
            <h2>Welcome to the most preferred IT School</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              consequuntur fuga. Minus repellendus numquam molestias nihil,
              illum esse, ipsum distinctio aliquid praesentium enim culpa,
              suscipit fugiat ex earum voluptatum possimus!
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Minus unde ratione excepturi quam!</li>
              <li>Ea quos voluptatum aliquid minus.</li>
              <li>Illum suscipit maiores a officiis!</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
