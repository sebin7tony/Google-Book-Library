import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./SearchResultItem.css";
import { addToSavedBooks } from "../../actions/BooksAction";

function SearchResultItem({ data, addToSavedBooks }) {
  console.log("SearchResultItem");
  console.log(data);
  return (
    <Container fluid className="search-container">
      <Row>
        <Col xl={3} lg={3} md={3} sm={3} className="search-image-col">
          <img className="search-image" src={data.imageurl} />
        </Col>
        <Col>
          <Row>
            <h2>{data.title}</h2>
          </Row>
          <Row>
            <h3>
              {data.description ? data.description.substring(0, 100) : null}
            </h3>
          </Row>
          <Row>
            <Col>{data.authors ? data.authors[0] : null}</Col>
            <Col>{data.ISBN ? data.ISBN[0] : null}</Col>
            <Col>{data.publishedDate ? data.publishedDate : null}</Col>
            <Col>
              <Button variant="primary" onClick={() => addToSavedBooks(data)}>
                Read later
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToSavedBooks: (book) => dispatch(addToSavedBooks(book)),
  };
};

export default connect(null, mapDispatchToProps)(SearchResultItem);
