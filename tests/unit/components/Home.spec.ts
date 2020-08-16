import { mount, createLocalVue } from '@vue/test-utils';
import Home from '@/components/Home.vue';
import Constants from '@/shared/Constants';
import Vuex, { Store } from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const sleepTime = 10;

describe('Home.vue', () => {
    let actions: { initLoading: any; };
    let state: { isLoading: boolean; };
    let mutations: { setLoading: any; };
    let store: Store<any>;

    beforeEach(() => {
        state = {
            isLoading: true,
        };

        mutations = {
            setLoading: jest.fn(() => store.state.isLoading = false),
        };

        actions = {
            initLoading: jest.fn(async () => {
                await sleep(sleepTime);
                store.commit('home/setLoading');
            }),
        };

        store = new Vuex.Store({
            state,
            mutations,
            actions,
            modules: {
                home: {
                    namespaced: true,
                    state,
                    mutations,
                    actions,
                },
                main: {
                    namespaced: true,
                    state: {
                        screen: Constants.SCREEN.home,
                    },
                },
            },
        });
    });

    it('Should show profile logo when is loadin change to false', async () => {
        const wrapper = mount(Home, { localVue, store });

        await wrapper.vm.$nextTick();
        const typewriter = wrapper.find('.typewriter');
        const homeContainer = wrapper.find('.home-container');

        expect(homeContainer.isVisible()).toBeTruthy();
        expect(typewriter.isVisible()).toBeTruthy();
        expect(actions.initLoading).toHaveBeenCalled();

        await sleep(sleepTime);

        expect(mutations.setLoading).toHaveBeenCalled();
        await wrapper.vm.$nextTick();

        const profileLogo = wrapper.find('.profile-logo');

        expect(profileLogo.isVisible()).toBeTruthy();
    });
});
