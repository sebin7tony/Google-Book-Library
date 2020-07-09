import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchResultItem from "../SearchResultItem";

export default function SearchResult(props) {
  console.log("SearchResult");
  console.log(props.data);
  return (
    <Container fluid>
      {props.data
        ? props.data.map((result, i) => {
            return (
              <Row key={i}>
                <SearchResultItem data={result} />
              </Row>
            );
          })
        : null}
    </Container>
  );
}
