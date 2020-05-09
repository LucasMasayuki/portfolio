<script lang="ts">
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["onClick"] }] */

import {
    Component, Prop, Vue, Emit,
} from 'vue-property-decorator';

@Component
export default class RoundedButton extends Vue {
    @Prop() public text?: string;

    @Emit('click')
    public onClick(e: Event) {
        return e;
    }
}
</script>

<template>
    <button class="rounded-button" @click="onClick">{{text}}</button>
</template>

<style lang="scss" scoped>
.rounded-button {
    border-radius: 30px;
    border: 1px solid transparent;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
        0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
    background-color: #333;
    color: white;
    cursor: pointer;
    font-family: 'Courier New', Courier, monospace;
    height: 40px;
    outline: none;
    text-transform: uppercase;
}
</style>
