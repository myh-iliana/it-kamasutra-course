import { ADD_POST, SET_USER_PROFILE, SET_USER_STATUS } from '../actions/profile';
import { FOLLOW_USER, UNFOLLOW_USER } from '../actions/users';

const initialState = {
  posts: [
    {
      id: 1,
      image:
        "https://thebookcoverdesigners.com/wp-content/uploads/2018/04/Firestone-Key_pb-e-260x400.jpg",
      likes: "14,100",
      text: 'hello',
    },
    {
      id: 2,
      image:
        "https://www.hodderscape.co.uk/wp-content/uploads/2016/05/CityDreaming1905-260x400.jpg",
      likes: "14,100",
      text: 'lorem ipsum dolor',
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS66wSm7xlWDYxGJEvrFgtxTdLJ5s8palt1Cw&usqp=CAU",
      likes: "14,100",
      text: 'lorem ipsum dolor',
    },
    {
      id: 4,
      image:
        "https://assets.skybound.com/wp-content/uploads/2019/03/12200831/Outcast41_cover-260x400.jpg",
      likes: "14,100",
      text: 'lorem ipsum dolor',
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI7JWbJcaZ9h6xsgcgBsKH8G0LN4_lvjXHew&usqp=CAU",
      likes: "14,100",
      text: 'lorem ipsum dolor',
    },
    {
      id: 6,
      image:
        "https://hungermtn.org/wp-content/uploads/2017/03/ruby-260x400.jpg",
      likes: "14,100",
      text: 'lorem ipsum dolor',
    },
    {
      id: 7,
      image:
        "https://7kingdoms.ru/wp-content/uploads/2017/11/Varys-260x400.jpg",
      likes: "14,100",
      text: 'lorem ipsum dolor',
    },
  ],
  user: null,
  status: null,
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 8,
        image: action.image,
        likes: 0,
        text: action.text,
      };

      return {
        ...state,
        posts: [newPost, ...state.posts],
      };

    case FOLLOW_USER:
      return {
        ...state,
      };

    case UNFOLLOW_USER:
      return {
        ...state,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        user: action.profile,
      };

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export default profile;
