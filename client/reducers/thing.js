import { UPDATE_USERTEXT } from '../actions/types';

const initialState = { userText: 'Type here' };

const thing = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERTEXT:
      return Object.assign({}, state, {
        userText: action.userText
      });
    default:
      return state;
  }
};

export default thing;