<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppContainer from '@/components/AppContainer.vue';

@Component({
    components: {
        AppContainer,
    },
})
export default class App extends Vue {}
</script>

<template>
    <AppContainer>
        <transition name="fade">
            <keep-alive :include="/Home/">
                <router-view />
            </keep-alive>
        </transition>
    </AppContainer>
</template>

<style lang="scss">
body {
    margin: 0;
}
</style>
