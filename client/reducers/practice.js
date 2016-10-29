import {
  UPDATE_PRACTICE_QUESTIONS,
  UPDATE_Q_INDEX
} from '../actions/types';

const initialState = {
  questions: [],
  q_index: 0
};

const practice = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRACTICE_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.questions
      });
    case UPDATE_Q_INDEX:
      return Object.assign({}, state, {
        q_index: action.q_index
      });
    default:
      return state;
  }
};

export default practice;