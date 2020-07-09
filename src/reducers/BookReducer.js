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

const initialState = {
  isFetching: false,
  savedBooks: [],
  suggestedBooks: [],
  searchResults: [],
  error: null,
};

export default function BookReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUGGESTIONS_BEGIN:
      return { ...state, isFetching: true, error: null };
    case FETCH_SUGGESTIONS_SUCCESS:
      return { ...state, suggestedBooks: action.payload, isFetching: false };
    case FETCH_SUGGESTIONS_FAILURE:
      return { ...state, suggestedBooks: [], error: action.payload };
    case FETCH_BOOKSEARCH_BEGIN:
      return { ...state, isFetching: true, error: null, searchResults: [] };
    case FETCH_BOOKSEARCH_SUCCESS:
      return { ...state, searchResults: action.payload, isFetching: false };
    case FETCH_BOOKSEARCH_FAILURE:
      return {
        ...state,
        searchResults: [],
        error: action.payload,
        isFetching: false,
      };
    case CLEAR_BOOKSEARCH_RESULTS:
      return { ...state, searchResults: [], isFetching: false };
    case ADD_TO_SAVEDBOOKS_LIST:
      return { ...state, savedBooks: [...state.savedBooks, action.payload] };
    default:
      return state;
  }
}
