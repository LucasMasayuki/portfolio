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
        <keep-alive :include="/Home/">
            <router-view />
        </keep-alive>
    </AppContainer>
</template>

<style lang="scss">
body {
    margin: 0;
}
</style>
