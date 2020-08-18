import AvaMain from "../../img/ava-main.jpg";

import { ADD_POST, FOLLOW_USER, UNFOLLOW_USER } from "../actions";

const initialState = {
  mainUser: {
    id: 0,
    username: "Alex Grannte",
    avatar: AvaMain,
  },
  posts: [
    {
      id: 1,
      image:
        "https://thebookcoverdesigners.com/wp-content/uploads/2018/04/Firestone-Key_pb-e-260x400.jpg",
      likes: "14,100",
    },
    {
      id: 2,
      image:
        "https://www.hodderscape.co.uk/wp-content/uploads/2016/05/CityDreaming1905-260x400.jpg",
      likes: "14,100",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS66wSm7xlWDYxGJEvrFgtxTdLJ5s8palt1Cw&usqp=CAU",
      likes: "14,100",
    },
    {
      id: 4,
      image:
        "https://assets.skybound.com/wp-content/uploads/2019/03/12200831/Outcast41_cover-260x400.jpg",
      likes: "14,100",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI7JWbJcaZ9h6xsgcgBsKH8G0LN4_lvjXHew&usqp=CAU",
      likes: "14,100",
    },
    {
      id: 6,
      image:
        "https://hungermtn.org/wp-content/uploads/2017/03/ruby-260x400.jpg",
      likes: "14,100",
    },
    {
      id: 7,
      image:
        "https://7kingdoms.ru/wp-content/uploads/2017/11/Varys-260x400.jpg",
      likes: "14,100",
    },
  ],
  followers: [
    {
      id: 1,
      avatar:
        "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
      fullName: "Vanessa Wells",
      login: "vannessa",
      isFollowed: false,
    },
    {
      id: 2,
      avatar:
        "https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png",
      fullName: "Anthony McCartney",
      login: "antony",
      isFollowed: false,
    },
    {
      id: 3,
      avatar:
        "https://f0.pngfuel.com/png/340/946/man-face-illustration-avatar-user-computer-icons-software-developer-avatar-png-clip-art.png",
      fullName: "Anna Morgan",
      login: "anna",
      isFollowed: true,
    },
    {
      id: 4,
      avatar:
        "https://f1.pngfuel.com/png/386/684/972/face-icon-user-icon-design-user-profile-share-icon-avatar-black-and-white-silhouette-png-clip-art.png",
      fullName: "Sean Coleman",
      login: "sean",
      isFollowed: true,
    },
    {
      id: 5,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5cFfo1W1-D2jgv-rKYlavCemH3g_IDWTrOw&usqp=CAU",
      fullName: "Grace Karen",
      login: "grace",
      isFollowed: false,
    },
    {
      id: 6,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQm0wMf5sm27bsD0Z7DF9GsoRNjgLltS32iXQ&usqp=CAU",
      fullName: "Clifford Graham",
      login: "clifford",
      isFollowed: true,
    },
    {
      id: 7,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNadk6wLo8MNeDF18OaImhKv7dbAzt3Q0wRA&usqp=CAU",
      fullName: "Eleanor Harper",
      login: "eleanor",
      isFollowed: false,
    },
  ],
  following: [
    {
      id: 1,
      avatar:
        "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/woman7-512.png",
      fullName: "Rodi Mar",
      login: "Rodi",
      isFollowed: true,
    },
    {
      id: 2,
      avatar:
        "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man1-512.png",
      fullName: "Konnor Monta",
      login: "Konnor",
      isFollowed: true,
    },
    {
      id: 3,
      avatar:
        "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man11-512.png",
      fullName: "Rian Kaptenkhof",
      login: "Rian",
      isFollowed: true,
    },
    {
      id: 4,
      avatar:
        "https://cdn1.iconfinder.com/data/icons/avatars-round-flat/33/an-06-512.png",
      fullName: "Dol Sammon",
      login: "Dol",
      isFollowed: true,
    },
    {
      id: 5,
      avatar:
        "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/woman10-512.png",
      fullName: "Korti Lanter",
      login: "Korti",
      isFollowed: true,
    },
    {
      id: 6,
      avatar:
        "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man7-512.png",
      fullName: "Mark Graham",
      login: "Mark",
      isFollowed: true,
    },
    {
      id: 7,
      avatar:
        "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/woman10-512.png",
      fullName: "Monte Lappor",
      login: "Monte",
      isFollowed: true,
    },
  ],
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

    default:
      return state;
  }
};

export default profile;
