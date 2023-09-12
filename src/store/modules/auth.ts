export default {
  state: () => ({
    isLoggedIn: false,
    username: "",
  }),
  mutations: {
    SET_LOGGEDIN(state: any, payload: boolean) {
      state.isLoggedIn = payload;
    },
    SET_USER_NAME(state: any, payload: string) {
      state.username = payload;
    },
  },
};
