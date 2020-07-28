import Ava1 from "../img/ava-1.jpg";
import Ava2 from "../img/ava-2.jpg";
import Ava3 from "../img/ava-3.jpg";
import Ava4 from "../img/ava-4.jpg";
import Ava5 from "../img/ava-5.jpg";
import Ava6 from "../img/ava-6.jpg";
import Ava7 from "../img/ava-7.jpg";
import Ava8 from "../img/ava-8.jpg";
import Ava9 from "../img/ava-9.jpg";
import AvaMain from "../img/ava-main.jpg";

const store = {
  _state: {
    profile: {
      mainUser: {
        id: 0,
        username: "Alex Grannte",
        avatar: AvaMain,
      },
      posts: [
        {
          id: 1,
          image: "https://thebookcoverdesigners.com/wp-content/uploads/2018/04/Firestone-Key_pb-e-260x400.jpg",
          likes: '14,100'
        },
        {
          id: 2,
          image: "https://www.hodderscape.co.uk/wp-content/uploads/2016/05/CityDreaming1905-260x400.jpg",
          likes: '14,100'
        },
        {
          id: 3,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS66wSm7xlWDYxGJEvrFgtxTdLJ5s8palt1Cw&usqp=CAU",
          likes: '14,100'
        },
        {
          id: 4,
          image: "https://assets.skybound.com/wp-content/uploads/2019/03/12200831/Outcast41_cover-260x400.jpg",
          likes: '14,100'
        },
        {
          id: 5,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI7JWbJcaZ9h6xsgcgBsKH8G0LN4_lvjXHew&usqp=CAU",
          likes: '14,100'
        },
        {
          id: 6,
          image: "https://hungermtn.org/wp-content/uploads/2017/03/ruby-260x400.jpg",
          likes: '14,100'
        },
        {
          id: 7,
          image: "https://7kingdoms.ru/wp-content/uploads/2017/11/Varys-260x400.jpg",
          likes: '14,100'
        },
      ],
    },
    messages: {
      dialogs: [
        {
          id: 1,
          username: "Anthony McCartney",
          avatar: Ava1,
          lastMessage: "Lorem ipsum dolor sit amet dsfsd eegjxyw fetret",
          lastTime: "1:55 PM",
        },
        {
          id: 2,
          username: "Sean Coleman",
          avatar: Ava2,
          lastMessage: "Lorem ipsum dolor sit amet dsfsd eegjxyw fetret",
          lastTime: "1:55 PM",
        },
        {
          id: 3,
          username: "Vanessa Wells",
          avatar: Ava3,
          lastMessage: "Lorem ipsum dolor sit amet dsfsd eegjxyw fetret",
          lastTime: "1:55 PM",
        },
        {
          id: 4,
          username: "Clifford Graham",
          avatar: Ava4,
          lastMessage: "Lorem ipsum dolor sit amet dsfsd eegjxyw fetret",
          lastTime: "1:55 PM",
        },
        {
          id: 5,
          username: "Grace Karen",
          avatar: Ava5,
          lastMessage: "Lorem ipsum dolor sit amet dsfsd eegjxyw fetret",
          lastTime: "1:55 PM",
        },
        {
          id: 6,
          username: "Alex Grantte",
          avatar: Ava6,
          lastMessage: "Lorem ipsum dolor sit amet dsfsd eegjxyw fetret",
          lastTime: "1:55 PM",
        },
        {
          id: 7,
          username: "Anna Morgan",
          avatar: Ava7,
          lastMessage: "Lorem ipsum dolor sit amet dsfsd eegjxyw fetret",
          lastTime: "1:55 PM",
        },
        {
          id: 8,
          username: "Francis Long",
          avatar: Ava8,
          lastMessage: "Lorem ipsum dolor sit amet dsfsd eegjxyw fetret",
          lastTime: "1:55 PM",
        },
        {
          id: 9,
          username: "Eleanor Harper",
          avatar: Ava9,
          lastMessage: "Lorem ipsum dolor sit amet dsfsd eegjxyw fetret",
          lastTime: "1:55 PM",
        },
      ],
    }
  },
  _callSubscriber() {
    console.log('State changed!')
  },
  getState() {
    return this._state;
  },
  addPost(text) {
    const newPost = {
      id: 8,
      image: 'https://www.hodderscape.co.uk/wp-content/uploads/2016/05/CityDreaming1905-260x400.jpg',
      likes: text,
    };

    this._state.profile.posts.push(newPost);

    this._callSubscriber();
  },

  subscribe (observer) {
    this._callSubscriber = observer;
  },
};

export default store;