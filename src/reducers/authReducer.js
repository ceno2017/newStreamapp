import {SIGN_IN,SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

const reducers = (state = INITIAL_STATE, action) => {
  const { type,payload } = action;
  switch (type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: payload }
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null }
    default:
      return state;
  }

}
export default reducers;