import React from "react";
import BookCard from "../BookCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BookSuggestions({ suggestedBooks }) {
  return (
    <Container fluid>
      <Row style={{ paddingLeft: "30px", marginTop: "20px" }}>
        <h2>Suggestions</h2>
      </Row>
      <Row>
        {suggestedBooks.map((book, i) => {
          return (
            <Col xl={3} lg={4} md={4} sm={6} xs={6} key={i}>
              <BookCard data={book} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
