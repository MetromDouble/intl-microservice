import {
  takeEvery,
  // call,
  // put
} from 'redux-saga/effects'
import {
  SIGN_IN,
} from '../actions/auth'

function* signIn(/* action */) {
  try {
    console.log('Hello, saga');
    yield console.log(1);
    // const response = yield call(instance.post, 'signin', action.payload)

    // if (response.data.status === 'success') {
    //   yield put({
    //     type: SIGN_IN.success,
    //     payload: response.data
    //   })
    // } else {
    //   alert(response.data.message)
    // }
  } catch (e) {
    // yield put({
    //   type: SIGN_IN.error,
    //   payload: e.message
    // })
  }
}

function* signInWatcher() {
  yield takeEvery(SIGN_IN.request, signIn)
}

export default [
  signInWatcher(),
]
