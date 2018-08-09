import { handleActions, createAction } from "redux-actions";
const UPDATE_BOOKS = "book/UPDATE_BOOKS";
const UPDATE_FAVORITE_BOOKS = "book/UPDATE_FAVORITE_BOOKS";
const FETCH_FAVORITE_BOOKS = "book/FETCH_FAVORITE_BOOKS";

export const types = {
  UPDATE_BOOKS,
  UPDATE_FAVORITE_BOOKS,
  FETCH_FAVORITE_BOOKS
};

const updateBooks = createAction(UPDATE_BOOKS);
const updateFavoriteBooks = createAction(UPDATE_FAVORITE_BOOKS);
const fetchFavoriteBooks = createAction(FETCH_FAVORITE_BOOKS);

export const actions = { updateBooks, updateFavoriteBooks, fetchFavoriteBooks };

const initialState = { books: [], favoriteBooks: [] };

export default handleActions(
  {
    [UPDATE_BOOKS]: (state, { payload: books }) => ({
      ...state,
      books
    }),
    [UPDATE_FAVORITE_BOOKS]: (state, { payload: favoriteBooks }) => ({
      ...state,
      favoriteBooks
    })
  },
  initialState
);
