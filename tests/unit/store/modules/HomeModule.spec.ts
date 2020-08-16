import Vuex from 'vuex';
import Vue from 'vue';
import store from '@/store';
Vue.use(Vuex);

describe('HomeModule loading', () => {
    beforeAll(() => {
        store.commit('home/setLoading', true);
    });

    describe('when enter on home page', () => {
        it('should change is loading', async () => {
            const typingTime = 1;
            await store.dispatch('home/initLoading', typingTime);

            expect(store.state.home.isLoading).toBeFalsy();
        });
    });
});
