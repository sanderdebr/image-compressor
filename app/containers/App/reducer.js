/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  COMPRESS_IMAGE_SUCCESS,
  COMPRESS_IMAGE,
  COMPRESS_IMAGE_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  compressedLink: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case COMPRESS_IMAGE:
        draft.loading = true;
        draft.error = false;
        draft.compressedLink = false;
        break;

      case COMPRESS_IMAGE_SUCCESS:
        draft.compressedLink = action.compressedLink;
        draft.loading = false;
        break;

      case COMPRESS_IMAGE_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
