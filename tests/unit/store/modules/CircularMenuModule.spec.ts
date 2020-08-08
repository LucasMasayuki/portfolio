import Vuex from 'vuex';
import Vue from 'vue';
import store from '@/store';
import NodeEntity from '@/models/NodeEntity';
import Constants from '@/shared/Constants';

Vue.use(Vuex);
describe('CircularMenuModule manipulate nodes', () => {
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });

    describe('when set icons callbacks', () => {
        it('should set icons callbacks', () => {
            const callback = () => 'testing';
            store.commit('circularMenu/setIconClickCallback', callback);

            const clickCallback: Array<() => void> = store.state.circularMenu.iconClickCallback;

            expect(clickCallback).not.toBeNull();
            expect(clickCallback).toHaveLength(1);
            expect(clickCallback[0]).toEqual(callback);
        });
    });

    describe('when insert initial nodes', () => {
        it('should insert nodes on circular list link and current nodes', () => {
            store.dispatch('circularMenu/insertNodes');

            const nodes: NodeEntity[] = store.state.circularMenu.currentNodes;

            expect(nodes).not.toBeNull();
            expect(nodes).toHaveLength(3);
        });
    });

    describe('when insert new node', () => {
        it('should insert node on the last index of array of current nodes', () => {
            const nodeEntity: NodeEntity = {
                clickCallback: () => 'testing',
                icon: ['fas', 'icon'],
                cssClass: 'current-icon',
                key: 0,
            };

            store.commit('circularMenu/insertNode', nodeEntity);

            const nodes: NodeEntity[] = store.state.circularMenu.currentNodes;

            expect(nodes).not.toBeNull();
            expect(nodes).toHaveLength(4);
            expect(nodes[3]).toEqual(nodeEntity);
        });
    });

    describe('when move to next icons', () => {
        it('should move icons to next direction', () => {
            const beforeNodes: NodeEntity[] = { ...store.state.circularMenu.currentNodes };

            store.dispatch('circularMenu/moveCircularListNodes', Constants.NEXT);

            const currentNodes: NodeEntity[] = store.state.circularMenu.currentNodes;

            expect(beforeNodes).not.toBeNull();
            expect(currentNodes).not.toBeNull();
            expect(beforeNodes).not.toEqual(currentNodes);
        });
    });
});

describe('CircularMenuModule open/close menu', () => {
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });

    describe('when start and click menu button', () => {
        it('should set icons callbacks', () => {
            const beforeIsOpenedMenu: boolean = store.state.circularMenu.isOpenedMenu;
            const beforeIcon: string[] = store.state.circularMenu.btnIcon;
            store.dispatch('circularMenu/onClickMenuBtn');

            const currentIsOpenedMenu: boolean = store.state.circularMenu.isOpenedMenu;
            const currentIcon: string[] = store.state.circularMenu.btnIcon;

            expect(currentIsOpenedMenu).toEqual(true);
            expect(beforeIsOpenedMenu).not.toEqual(currentIsOpenedMenu);
            expect(beforeIcon).not.toEqual(currentIcon);
        });
    });

    describe('when opened menu and click menu button', () => {
        it('should close menu', () => {
            const beforeIsOpenedMenu: boolean = store.state.circularMenu.isOpenedMenu;
            const beforeIcon: string[] = store.state.circularMenu.btnIcon;
            store.dispatch('circularMenu/onClickMenuBtn');

            const currentIsOpenedMenu: boolean = store.state.circularMenu.isOpenedMenu;
            const currentIcon: string[] = store.state.circularMenu.btnIcon;

            expect(currentIsOpenedMenu).toEqual(false);
            expect(beforeIsOpenedMenu).not.toEqual(currentIsOpenedMenu);
            expect(beforeIcon).not.toEqual(currentIcon);
        });
    });
});
