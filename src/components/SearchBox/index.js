import React from "react";
import { useState } from "react";

import "./SearchBox.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SearchBox(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onClickHandler = () => {
    props.onClick(searchTerm);
  };

  return (
    <Container className="searchBoxContainer">
      <Row>
        <Col xl={9} lg={9} md={9} sm={9}>
          <form>
            <Form.Group>
              <Form.Control
                name="searchBox"
                placeholder="Search your google book"
                value={searchTerm}
                onChange={handleInputChange}
              />
            </Form.Group>
          </form>
        </Col>
        <Col>
          <Button onClick={onClickHandler}>Search</Button>
        </Col>
      </Row>
    </Container>
  );
}
