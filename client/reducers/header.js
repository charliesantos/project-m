import { TOGGLE_PRACTICE } from '../actions/types';

const initialState = {
  isPractice: false
};

const header = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PRACTICE:
      return Object.assign({}, state, {
        isPractice: action.isPractice
      });
    default:
      return state;
  }
};

export default header;