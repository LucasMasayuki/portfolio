<script lang="ts">
import { getModule } from 'vuex-module-decorators';
import { Component, Vue } from 'vue-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CircularMenuModule from '../store/modules/CircularMenuModule';
import moveTo from '../shared/Constants';

@Component({
    name: 'IconSliderMenu',
    components: {
        FontAwesomeIcon,
    },
})
export default class CircularMenu extends Vue {
    private circularMenuModule = getModule(CircularMenuModule, this.$store);

    get currentNodes(): any[] {
        return this.circularMenuModule.currentNodes;
    }

    get btnIcon(): string[] {
        return this.circularMenuModule.btnIcon;
    }

    get isOpenedMenu(): boolean {
        return this.circularMenuModule.isOpenedMenu;
    }

    public beforeMount(): void {
        const circularMenuModule = getModule(CircularMenuModule, this.$store);

        const EMPTY_CALLBACK = (): void => {
            console.log('do nothing');
        };

        const iconClickCallback = [
            this.onClickPrevIcon,
            EMPTY_CALLBACK,
            this.onClickNextIcon,
        ];

        iconClickCallback.forEach((callback) => {
            circularMenuModule.setIconClickCallback(callback);
        });

        circularMenuModule.insertNodes();
    }

    public onClickPrevIcon() {
        this.circularMenuModule.moveCircularListNodes(moveTo.PREVIOUS);
    }

    public onClickNextIcon() {
        this.circularMenuModule.moveCircularListNodes(moveTo.NEXT);
    }

    public onClickMenuBtn() {
        this.circularMenuModule.onClickMenuBtn();
    }
}
</script>

<template>
    <div class="icon-circular-menu-container">
        <button class="menu-btn" v-on:click="onClickMenuBtn">
            <FontAwesomeIcon :icon="btnIcon" />
        </button>
        <transition name="button-transaction">
            <div class="icon-circular-menu" v-if="isOpenedMenu">
                <ul>
                    <li v-for="node in currentNodes" :key="node.key" class="one">
                        <div class="slice">
                            <FontAwesomeIcon
                                class="icon"
                                :class="node.cssClass"
                                :icon="node.icon"
                                @click="node.clickCallback"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.menu-btn {
    background: none;
    background-color: white;
    border: none;
    border-radius: 50%;
    bottom: -1.75em;
    cursor: pointer;
    font-size: 1.8em;
    height: 3.5em;
    left: 50%;
    margin-left: -1.75em;
    padding-bottom: 1em;
    position: fixed;
    outline: none;
    text-align: center;
    width: 3.5em;
    z-index: 11;
}

.icon {
    box-sizing: border-box;
    color: white;
    display: inline-block;
    font-size: 1.1em;
    position: relative;
    text-align: center;
    width: 1.25em;
}

.prev-icon,
.next-icon {
    opacity: 0.5;
}

.icon-circular-menu ul {
    box-sizing: border-box;
    pointer-events: auto;
    position: relative;
}

.icon-circular-menu {
    bottom: -13em;
    border-radius: 50%;
    font-size: 1em;
    height: 26em;
    left: 50%;
    margin-left: -13em;
    overflow: hidden;
    pointer-events: auto;
    position: fixed;
    width: 26em;
    z-index: 10;
}

.button-transaction-enter,
.button-transaction-leave-to {
    transform: scale(0.1);
}

.button-transaction-enter-active,
.button-transaction-leave-active {
    transition: all 0.3s ease;
}

.button-transaction-enter-to,
.button-transaction-leave {
    transform: scale(1);
}

.icon-circular-menu li {
    box-sizing: border-box;
    font-size: 1.5em;
    height: 10em;
    left: 50%;
    margin-left: -10em;
    margin-top: -1.3em;
    -moz-box-sizing: border-box;
    position: absolute;
    overflow: hidden;
    top: 50%;
    transform-origin: 100% 100%;
    width: 10em;
}

.icon-circular-menu li:nth-child(1) {
    transform: rotate(0deg) skew(30deg);
}

.icon-circular-menu li:nth-child(2) {
    transform: rotate(60deg) skew(30deg);
}

.icon-circular-menu li:nth-child(3) {
    transform: rotate(120deg) skew(30deg);
}

.slice {
    background-color: hsla(0, 88%, 63%, 1);
    border-radius: 50%;
    bottom: -7.25em;
    box-sizing: border-box;
    color: white;
    font-size: 1.18em;
    height: 14.5em;
    padding-top: 1.8em;
    position: absolute;
    right: -7.25em;
    text-align: center;
    text-decoration: none;
    transform: skew(-30deg) rotate(-60deg) scale(0.7);
    width: 14.5em;
}
</style>
