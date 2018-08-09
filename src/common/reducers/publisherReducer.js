import { handleActions, createAction } from "redux-actions";
const UPDATE_PUBLISHERS = "author/UPDATE_PUBLISHERS";
const FETCH_PUBLISHERS = "author/FETCH_PUBLISHERS";

export const types = {
  UPDATE_PUBLISHERS,
  FETCH_PUBLISHERS
};

const updatePublishers = createAction(UPDATE_PUBLISHERS);
const fetchPublishers = createAction(FETCH_PUBLISHERS);

export const actions = { updatePublishers, fetchPublishers };

const initialState = { publishers: {} };

export default handleActions(
  {
    [UPDATE_PUBLISHERS]: (state, { payload: publishers }) => {
      return {
        ...state,
        publishers
      };
    }
  },
  initialState
);
