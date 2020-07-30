const ADD_MESSAGE = 'ADD_MESSAGE';

export const dialogsReducer = (state, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      const createdAt = new Date(Date.now());

      const newMessage = {
        id: 9,
        createdAt: createdAt.toLocaleTimeString(),
        ownerId: action.ownerId,
        text: action.text,
      };

      state.dialogs[0].messages.push(newMessage);
      return state;

    default: return state;
  }
};

export const addMessage = (ownerId, text) => {
  return {
    type: ADD_MESSAGE,
    ownerId,
    text,
  }
};

export default dialogsReducer;