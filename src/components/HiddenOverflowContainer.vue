<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HiddenOverflowContainer extends Vue {
    @Prop() public screen?: string;
}
</script>

<template>
    <div class="hidden-overflow-container" :class="screen">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
body {
    height: 100%;
    margin: 0;
}
.hidden-overflow-container {
    align-items: center;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    display: flex;
    font-family: 'Courier New', Courier, monospace;
    height: 100vh;
    justify-content: center;
    overflow: hidden;
    width: 100%;
}
.home {
    background-image: url('../assets/imgs/home_background.jpg');
}
.contact_me {
    background-image: url('../assets/imgs/contact_me.jpg');
}
</style>
