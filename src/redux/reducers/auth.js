import {
  SIGN_IN,
} from '../actions/auth'

export default (state = null, action) => {
  switch (action.type) {
    case SIGN_IN.success:
      return action.payload;
    default:
      return state;
  }
};
