<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {}
</script>

<template>
    <transition name="fade">
        <keep-alive :include="/Main/">
            <router-view />
        </keep-alive>
    </transition>
</template>

<style lang="scss">
body {
    margin: 0;
}
</style>
