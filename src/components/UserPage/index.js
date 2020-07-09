import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookCard from "../BookCard";

import "./UserPage.css";

const UserPage = (props) => {
  return (
    <Container fluid className="user-page-container">
      <Row>
        <h2>Saved Books</h2>
      </Row>
      <Row>
        {props.savedBooks.map((book) => {
          return (
            <Col xl={3} lg={3} md={4} sm={4}>
              <BookCard className="user-page-card" data={book} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    savedBooks: state.books.savedBooks,
  };
};

export default connect(mapStateToProps, null)(UserPage);
