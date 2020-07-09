import {
  FETCH_SUGGESTIONS_BEGIN,
  FETCH_SUGGESTIONS_SUCCESS,
  FETCH_SUGGESTIONS_FAILURE,
  FETCH_BOOKSEARCH_BEGIN,
  FETCH_BOOKSEARCH_SUCCESS,
  FETCH_BOOKSEARCH_FAILURE,
  CLEAR_BOOKSEARCH_RESULTS,
  ADD_TO_SAVEDBOOKS_LIST,
} from "../constants/ActionTypes";
import { BASE_URL } from "../constants/ApiConstants";
import axios from "axios";

export function fetchSuggestionsAction() {
  return async (dispatch) => {
    dispatch(fetchSuggestionsBegin());
    try {
      const { data } = await axios.get(BASE_URL + "?q=finance");
      const books = extractBook(data);
      dispatch(fetchSuggestionSuccess(books));
    } catch (error) {
      dispatch(fetchSuggestionFailure(error));
    }
  };
}

const fetchSuggestionsBegin = () => ({
  type: FETCH_SUGGESTIONS_BEGIN,
});

const fetchSuggestionSuccess = (bookSuggestions) => ({
  type: FETCH_SUGGESTIONS_SUCCESS,
  payload: bookSuggestions,
});

const fetchSuggestionFailure = (error) => ({
  type: FETCH_SUGGESTIONS_FAILURE,
  payload: error,
});

export function fetchSearchResultAction(query) {
  if (!query) {
    return clearSearchResult();
  }
  return async (dispatch) => {
    dispatch(fetchSearchResultBegin());
    try {
      const { data } = await axios.get(BASE_URL + `?q=${query}`);
      const books = extractBook(data);
      console.log(books);
      dispatch(fetchSearchResultSuccess(books));
    } catch (error) {
      console.log(error);
      dispatch(fetchSearchResultFailure(error));
    }
  };
}

const fetchSearchResultBegin = () => ({
  type: FETCH_BOOKSEARCH_BEGIN,
});

const fetchSearchResultSuccess = (books) => ({
  type: FETCH_BOOKSEARCH_SUCCESS,
  payload: books,
});

const fetchSearchResultFailure = (error) => ({
  type: FETCH_BOOKSEARCH_FAILURE,
  payload: error,
});

export const clearSearchResult = () => ({
  type: CLEAR_BOOKSEARCH_RESULTS,
});

export function addToSavedBooks(book) {
  return {
    type: ADD_TO_SAVEDBOOKS_LIST,
    payload: book,
  };
}

// utility function
const extractBook = (data) => {
  console.log("extractBook");
  console.log(data);
  return data.items.map((book) => {
    return {
      imageurl: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.smallThumbnail
        : null,
      title: book.volumeInfo.title,
      publishedDate: book.volumeInfo.publishedDate,
      description: book.volumeInfo.description,
      ISBN: book.volumeInfo.industryIdentifiers
        ? book.volumeInfo.industryIdentifiers.map((ident) => ident.type)
        : undefined,
      authors: book.volumeInfo.authors,
    };
  });
};
