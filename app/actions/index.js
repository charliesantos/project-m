import { UPDATE_USERTEXT } from './types';

export const updateUserText = (value) => {
  return {
    type: UPDATE_USERTEXT,
    userText: value
  };
};