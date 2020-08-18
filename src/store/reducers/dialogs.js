import AvaMain from "../../img/ava-main.jpg";
import Ava1 from "../../img/ava-1.jpg";
import Ava2 from "../../img/ava-2.jpg";
import Ava3 from "../../img/ava-3.jpg";
import Ava4 from "../../img/ava-4.jpg";
import Ava5 from "../../img/ava-5.jpg";
import Ava6 from "../../img/ava-6.jpg";
import Ava7 from "../../img/ava-7.jpg";
import Ava8 from "../../img/ava-8.jpg";
import Ava9 from "../../img/ava-9.jpg";

import { ADD_MESSAGE } from "../actions";

const initialState = {
  chats: [
    {
      id: 1,
      username: "Anthony McCartney",
      avatar: Ava1,
      lastMessage: "Lorem ipsum dolor sit amet dsfsd eegjxyw fetret",
      lastTime: "1:55 PM",
      messages: [
        {
          id: 1,
          ownerId: 0,
          createdAt: 'Sat, Aug 23, 1:08 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.',
        },
        {
          id: 2,
          ownerId: 1,
          createdAt: '5 minutes ago',
          text: 'Cras ultricies ligula.',
        },
        {
          id: 3,
          ownerId: 0,
          createdAt: 'Sat, Aug 23, 1:08 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.',
        },
        {
          id: 4,
          ownerId: 1,
          createdAt: '5 minutes ago',
          text: 'Cras ultricies ligula.',
        },
        {
          id: 5,
          ownerId: 0,
          createdAt: 'Sat, Aug 23, 1:08 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.',
        },
        {
          id: 6,
          ownerId: 1,
          createdAt: '2 minutes ago',
          text: 'Lorem ipsum dolor sit amet',
        },
        {
          id: 7,
          ownerId: 0,
          createdAt: 'Sat, Aug 23, 1:08 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.',
        },
        {
          id: 8,
          ownerId: 1,
          createdAt: '2 minutes ago',
          text: 'Lorem ipsum dolor sit amet',
        },
      ],
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
};

export const dialogs = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: 9,
        createdAt: action.createdAt,
        ownerId: action.ownerId,
        text: action.text,
      };

      return {
        ...state,
        chats: state.chats.map(chat => {
          if (chat.id === action.chatId) {
            return {
              ...chat,
              messages: [...chat.messages, newMessage],
            };
          }

          return chat;
        }),
      };

    default: return state;
  }
};

export default dialogs;