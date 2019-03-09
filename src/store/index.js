import Vue from 'vue';
import Vuex from 'vuex';
import moduleA from './moduleA';
import moduleB from './moduleB';

const UPDATE_COUNT = 'UPDATE_COUNT';
const UPDATE_VALUE = 'UPDATE_VALUE';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    d: 10,
    num: 100
  },
  actions: {
    increment(context, payload) {
      context.commit(UPDATE_COUNT, payload);
    },
    decreaseValue(context, payload) {
      context.commit(UPDATE_VALUE, payload);
    }
  },
  mutations: {
    [UPDATE_COUNT](state, payload){
      state.d += payload;
      store.state.b.e += 4;
    },
    decrease(state, payload) {
      state.d -= payload;
      store.state.a.e -= 3;
    },
    outputValue(state) {
      state.num += 10;
    },
    [UPDATE_VALUE](state) {
      state.num -= 10;
    }
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
});

export default store;
