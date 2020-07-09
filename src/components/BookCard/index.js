import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { addToSavedBooks } from "../../actions/BooksAction";
import "./BookCard.css";

function BookCard({ data, addToSavedBooks }) {
  return (
    <Card className="bookCard">
      <Card.Img variant="top" src={data.imageurl} />
      <Card.Title>{data.title}</Card.Title>
      <Col>
        <Row>
          {data.description ? data.description.substring(0, 100) : null}
        </Row>
        <Row>
          <Col>{data.authors ? data.authors[0] : null}</Col>
          <Col>{data.ISBN ? data.ISBN[0] : null}</Col>
          <Col>{data.publishedDate ? data.publishedDate : null}</Col>
        </Row>
      </Col>

      <Button variant="primary" onClick={() => addToSavedBooks(data)}>
        Read later
      </Button>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToSavedBooks: (book) => dispatch(addToSavedBooks(book)),
  };
};

export default connect(null, mapDispatchToProps)(BookCard);
