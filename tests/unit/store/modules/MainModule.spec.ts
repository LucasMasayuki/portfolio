import Vuex from 'vuex';
import Vue from 'vue';
import store from '@/store';
Vue.use(Vuex);

describe('MainModule', () => {
    beforeAll(() => {
        store.commit('main/setScreen', 'home');
    });

    describe('when change screen', () => {
        it('should current screen is testing', () => {
            const currentScreen = 'testing';
            store.dispatch('main/onChangeScreen', currentScreen);

            expect(store.state.main.screen).toEqual(currentScreen);
        });
    });
});
