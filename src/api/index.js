import axios from 'axios';

const axiosI = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'api-key': 'ac86d9e3-9187-4600-9f7f-465babf3b5b5',
  },
});

export const Auth = {
  signIn() {
    return axiosI.get(`/auth/me`).then((res) => res.data);
  },
};

export const Users = {
  getAll(currentPage = 1, pageSize = 12) {
    return axiosI.get(`/users?page=${currentPage}&count=${pageSize}`).then((res) => res.data);
  },

  getById(id) {
    return axiosI.get(`/profile/${id}`).then((res) => res.data);
  },

  follow(id) {
    return axiosI.post(`/follow/${id}`).then((res) => res.data);
  },

  unfollow(id) {
    return axiosI.delete(`/follow/${id}`).then((res) => res.data);
  },
};
