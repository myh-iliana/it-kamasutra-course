const ADD_POST = 'ADD_POST';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 8,
        image: action.image,
        likes: 0,
        text: action.text,
      };

      state.posts.unshift(newPost);
      return state;

    default: return state;
  }
};

export const addPost = (value, image) => {
  return {
    type: ADD_POST,
    text: value,
    image,
  }
};

export default profileReducer;