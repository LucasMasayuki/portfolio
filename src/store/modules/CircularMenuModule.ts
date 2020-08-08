import {
    VuexModule, Module, Action, Mutation,
} from 'vuex-module-decorators';
import { Vue } from 'vue-property-decorator';
import NodeEntity from '@/models/NodeEntity';

import CircularDoublyLinkedList from '../../shared/CircularDoublyLinkedList';

const ICONS = [
    ['fas', 'home'],
    ['fas', 'envelope'],
    ['fas', 'code'],
    ['fas', 'file-code'],
];

const CSS_CLASSES = [
    'prev-icon',
    'current-icon',
    'next-icon',
    null,
];

const BTN_ICON_CLASS = {
    OPENED: ['fas', 'home'],
    CLOSED: ['fas', 'times'],
};

const NUMBER_OF_VISIBLE_ICONS = 3;

@Module({
    namespaced: true,
})
export default class CircularMenuModule extends VuexModule {
    public circularDoublyLinkedList = new CircularDoublyLinkedList();
    public isOpenedMenu = false;

    public currentNodes: NodeEntity[] = [];

    public iconClickCallback: Array<() => void> = [];

    public btnIcon: string[] = BTN_ICON_CLASS.OPENED;

    @Mutation
    public insertNode(data: NodeEntity) {
        this.currentNodes.push(data);
    }

    @Mutation
    public setNodeOnIndex(payload: any) {
        Vue.set(this.currentNodes, payload.index, payload.node);
    }

    @Mutation
    public setIsOpenedMenu(isOpenedMenu: boolean) {
        this.isOpenedMenu = isOpenedMenu;
    }

    @Mutation
    public setBtnIcon(btnIcon: string[]) {
        this.btnIcon = btnIcon;
    }

    @Mutation
    public setIconClickCallback(callback: () => void) {
        this.iconClickCallback.push(callback);
    }

    @Action
    public insertNodes(): void {
        ICONS.forEach((icon, index) => {
            const data = {
                cssClass: CSS_CLASSES[index],
                clickCallback: this.iconClickCallback[index],
                icon,
                key: index,
            };

            this.circularDoublyLinkedList.add(data);

            if (index < NUMBER_OF_VISIBLE_ICONS) {
                this.context.commit('insertNode', data);
            }
        });
    }

    @Action
    public moveCircularListNodes(moveTo: string): void {
        this.circularDoublyLinkedList.moveHead(moveTo);
        const nodes = this.circularDoublyLinkedList.getElementsOnRange(NUMBER_OF_VISIBLE_ICONS);

        nodes.forEach((element, index) => {
            const node = element;

            node.cssClass = CSS_CLASSES[index];
            node.clickCallback = this.iconClickCallback[index];
            node.key = index;
            this.context.commit('setNodeOnIndex', { node, index });
        });
    }

    @Action
    public onClickMenuBtn(): void {
        if (this.isOpenedMenu) {
            this.context.commit('setIsOpenedMenu', false);
            this.context.commit('setBtnIcon', BTN_ICON_CLASS.OPENED);
        } else {
            this.context.commit('setIsOpenedMenu', true);
            this.context.commit('setBtnIcon', BTN_ICON_CLASS.CLOSED);
        }
    }
}
