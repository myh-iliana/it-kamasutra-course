export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = (chatId, ownerId, text) => {
  const createdAt = new Date(Date.now());

  return {
    type: ADD_MESSAGE,
    chatId,
    ownerId,
    text,
    createdAt: createdAt.toLocaleTimeString(),
  };
};
