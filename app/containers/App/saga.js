/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
// import { makeSelectFile } from './selectors';
import { imageCompressed, imageCompressError } from './actions';
import { COMPRESS_IMAGE } from './constants';

/**
 * Handles compressing images
 */
export function* getImage() {
  // Select username from store
  const username = 'sanderdebr'; // yield select(makeSelectFile());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  //   async compressImage (event, useWebWorker) {
  //     const file = event.target.files[0]
  //     console.log('input', file)
  //     console.log(
  //       'ExifOrientation',
  //       await imageCompression.getExifOrientation(file)
  //     )
  //     const targetName = useWebWorker ? 'webWorker' : 'mainThread'
  //     this.setState(prevState => ({
  //       ...prevState,
  //       [targetName]: {
  //         ...prevState[targetName],
  //         inputSize: (file.size / 1024 / 1024).toFixed(2),
  //         inputUrl: URL.createObjectURL(file)
  //       }
  //     }))
  //     var options = {
  //       maxSizeMB: this.state.maxSizeMB,
  //       maxWidthOrHeight: this.state.maxWidthOrHeight,
  //       useWebWorker,
  //       onProgress: p => this.onProgress(p, useWebWorker)
  //     }
  //     const output = await imageCompression(file, options)
  //     console.log('output', output)
  //     this.setState(prevState => ({
  //       ...prevState,
  //       [targetName]: {
  //         ...prevState[targetName],
  //         outputSize: (output.size / 1024 / 1024).toFixed(2),
  //         outputUrl: URL.createObjectURL(output)
  //       }
  //     }))
  //   }

  try {
    // Call our request helper (see 'utils/request')
    const compressedLink = yield call(request, requestURL);
    yield put(imageCompressed(compressedLink));
  } catch (err) {
    yield put(imageCompressError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(COMPRESS_IMAGE, getImage);
}
