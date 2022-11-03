import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testedSuite: '',
    architecture: 'arm64',
    // urlParam: 'openEuler',
    urlParam: 'obs',
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
