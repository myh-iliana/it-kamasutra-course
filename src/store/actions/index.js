export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_POST = 'ADD_POST';

export const addMessage = (ownerId, text) => {
  return {
    type: ADD_MESSAGE,
    ownerId,
    text,
  }
};

export const addPost = (value, image) => {
  return {
    type: ADD_POST,
    text: value,
    image,
  }
};