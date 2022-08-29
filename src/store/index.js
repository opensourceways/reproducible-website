import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testedSuite: '',
    architecture: 'amd64',
    urlParam: 'mindSpore',
  },
  mutations: {
    changeTestedSuiteVx(state, payload) {
      state.testedSuite = payload.testedSuite;
    },
    changeArchitectureVx(state, payload) {
      state.architecture = payload.architecture;
    },
    changeUrlParamVx(state, payload) {
      state.urlParam = payload.urlParam;
    },
  },
  actions: {},
  modules: {},
});
