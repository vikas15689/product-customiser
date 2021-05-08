import Vue from "vue";
import Vuex from "vuex";
import product from "./../modules/product/store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { product },
});