import Vue from 'vue';
import Vuex from 'vuex';
import HomeModule from './modules/HomeModule';
import MainModule from './modules/MainModule';
import CircularMenuModule from './modules/CircularMenuModule';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home: HomeModule,
        main: MainModule,
        circularMenu: CircularMenuModule,
    },
});
