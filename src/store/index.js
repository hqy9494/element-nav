import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        names: []
    },
    mutations: {
        changeState(state,obj) {
            state[obj.key] = obj.value
        }
    },
})

export default store