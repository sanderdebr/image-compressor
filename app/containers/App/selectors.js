/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectFile = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.file,
  );

const makeSelectFileOptions = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.fileOptions,
  );

const makeSelectLink = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.compressedLink,
  );

const makeSelectOutput = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.output,
  );

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectFile,
  makeSelectFileOptions,
  makeSelectLink,
  makeSelectOutput,
};
