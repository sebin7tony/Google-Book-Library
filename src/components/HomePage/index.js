import React, { useEffect } from "react";
import { connect } from "react-redux";

import SearchBox from "../SearchBox";
import SearchResults from "../SearchResult";
import BookSuggestions from "../BookSuggestions";
import {
  fetchSuggestionsAction,
  fetchSearchResultAction,
} from "../../actions/BooksAction";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import "./HomePage.css";

/*
custom styling in react bootstrap styling 
https://stackoverflow.com/questions/46151515/react-bootstrap-causing-margins-on-left-and-right-side
*/

const HomePage = (props) => {
  useEffect(() => {
    console.log("useEffect has called");
    props.fetchSuggestions();
  }, []);

  const loader = (
    <Spinner animation="border" role="status" className="spinner">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );

  const handleClick = (query) => {
    props.fetchSearchResults(query);
  };

  return (
    <div>
      <Container fluid className="homeContainer">
        <Row>
          <Col></Col>
          <Col lg={6} xl={6} md={12} sm={12}>
            <SearchBox onClick={handleClick} />
          </Col>
          <Col></Col>
        </Row>
        <Row className="searchResultContainer">
          <Col>
            <SearchResults data={props.searchResults} />
          </Col>
        </Row>
        <Row>
          {props.isFetching ? (
            loader
          ) : (
            <Col>
              <BookSuggestions suggestedBooks={props.suggestedBooks} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    suggestedBooks: state.books.suggestedBooks,
    isFetching: state.books.isFetching,
    searchResults: state.books.searchResults,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchSuggestions: () => dispatch(fetchSuggestionsAction()),
  fetchSearchResults: (query) => dispatch(fetchSearchResultAction(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
