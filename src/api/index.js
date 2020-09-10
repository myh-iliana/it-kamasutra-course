import axios from 'axios';

const axiosI = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'api-key': 'ac86d9e3-9187-4600-9f7f-465babf3b5b5',
  },
});

export const Auth = {
  me() {
    return axiosI.get(`/auth/me`).then((res) => res.data);
  },

  signIn(email, password, rememberMe = false, captcha) {
    return axiosI.post(`/auth/login`, { email, password, rememberMe, captcha });
  },

  signOut() {
    return axiosI.delete(`/auth/login`);
  },

  getCaptcha() {
    return axiosI.get('/security/get-captcha-url');
  },
};

export const Users = {
  getAll(currentPage = 1, pageSize = 12) {
    return axiosI.get(`/users?page=${currentPage}&count=${pageSize}`).then((res) => res.data);
  },

  getById(userId) {
    return axiosI.get(`/profile/${userId}`).then((res) => res.data);
  },

  follow(userId) {
    return axiosI.post(`/follow/${userId}`).then((res) => res.data);
  },

  unfollow(userId) {
    return axiosI.delete(`/follow/${userId}`).then((res) => res.data);
  },

  getStatus(userId) {
    return axiosI.get(`/profile/status/${userId}`).then(res => res.data);
  },

  updateStatus(status) {
    return axiosI.put(`/profile/status`, { status }).then(res => res.data);
  },
};
