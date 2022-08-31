import { createStore } from 'vuex';

export default createStore({
  state: {
    isChampImgLoaded: false,
    isAbilityImgLoaded: false,
  },
  mutations: {
    reset(state) {
      state.isChampImgLoaded = false;
      state.isAbilityImgLoaded = false;
    },
    updateFirst(state, param) {
      state.isChampImgLoaded = param;
    },
    updateSecond(state, param) {
      state.isAbilityImgLoaded = param;
    },
  },
});
