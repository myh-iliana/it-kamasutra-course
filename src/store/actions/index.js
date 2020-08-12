export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_POST = 'ADD_POST';

export const addMessage = (chatId, ownerId, text) => {
  const createdAt = new Date(Date.now());

  return {
    type: ADD_MESSAGE,
    chatId,
    ownerId,
    text,
    createdAt: createdAt.toLocaleTimeString(),
  }
};

export const addPost = (value, image) => {
  return {
    type: ADD_POST,
    text: value,
    image,
  }
};