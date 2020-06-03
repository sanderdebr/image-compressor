/**
 * Compress image using browser-image-compression
 */

import { put, select, takeLatest } from 'redux-saga/effects';
import imageCompression from 'browser-image-compression';

import { makeSelectFile, makeSelectFileOptions } from './selectors';
import { imageCompressed, imageCompressError } from './actions';
import { COMPRESS_IMAGE } from './constants';

/**
 * Async function for compressing images
 */
export function* getImage() {
  // Get file and options from store
  const file = yield select(makeSelectFile());
  const options = yield select(makeSelectFileOptions());
  try {
    const output = yield imageCompression(file, options);
    const compressedLink = URL.createObjectURL(output);
    const size = (output.size / 1024 / 1024).toFixed(2);
    yield put(imageCompressed(compressedLink, size));
  } catch (err) {
    yield put(imageCompressError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function*() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(COMPRESS_IMAGE, getImage);
}
