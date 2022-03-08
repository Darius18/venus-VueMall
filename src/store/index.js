import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
    count:1
};
const mutations = {
    add
};
const actions={
    addMYcount(context){
        context.commit('addMYcount')
    }
};
const getters={
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})