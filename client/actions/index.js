import $ from 'jquery';
import {
  TOGGLE_PRACTICE,
  UPDATE_PRACTICE_QUESTIONS,
  UPDATE_Q_INDEX
} from './types';

export const togglePractice = (isPractice) => {
  return {
    type: TOGGLE_PRACTICE,
    isPractice: isPractice
  };
};

export const updatePracticeQuestions = (questions) => {
  return {
    type: UPDATE_PRACTICE_QUESTIONS,
    questions: questions
  };
};

export const updateQIndex = (index) => {
  return {
    type: UPDATE_Q_INDEX,
    q_index: index
  };
};

export const fetchPracticeQuestions = () => {
  return (dispatch) => {
    $.ajax({
      url: '/res/questions.json',
      success: function(data, status, res) {
        res.status === 200 && dispatch(updatePracticeQuestions(JSON.parse(res.responseText)));
      }
    });
  };
};