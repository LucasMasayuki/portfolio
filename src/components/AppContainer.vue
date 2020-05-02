<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppContainer extends Vue {}
</script>

<template>
    <div class="app-container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
body {
    height: 100%;
    margin: 0;
}
.app-container {
    background-image: url('../assets/background5.jpg');
    background-size: 100% 100%;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    width: 100%;
}
</style>
