import { handleActions, createAction } from "redux-actions";
const UPDATE_AUTHORS = "author/UPDATE_AUTHORS";
const FETCH_AUTHORS = "author/FETCH_AUTHORS";

export const types = {
  UPDATE_AUTHORS,
  FETCH_AUTHORS
};

const updateAuthors = createAction(UPDATE_AUTHORS);
const fetchAuthors = createAction(FETCH_AUTHORS);

export const actions = { updateAuthors, fetchAuthors };

const initialState = { authors: {} };

export default handleActions(
  {
    [UPDATE_AUTHORS]: (state, { payload: authors }) => {
      return {
        ...state,
        authors
      };
    }
  },
  initialState
);
