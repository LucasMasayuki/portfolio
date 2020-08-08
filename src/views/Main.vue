<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HiddenOverflowContainer from '@/components/HiddenOverflowContainer.vue';
import Home from '@/components/Home.vue';
import CircularMenu from '@/components/CircularMenu.vue';

@Component({
    name: 'Main',
    components: {
        Home,
        HiddenOverflowContainer,
        CircularMenu,
    },
})
export default class Main extends Vue {
    get currentScreen(): string {
        return this.$store.state.main.screen;
    }

    get isNotLoading(): boolean {
        return !this.$store.state.home.isLoading;
    }

    get isHomeScreen(): boolean {
        return this.$store.state.main.screen === 'home';
    }
}
</script>

<template>
    <div>
        <HiddenOverflowContainer :screen="currentScreen">
            <Home v-if="isHomeScreen" />
        </HiddenOverflowContainer>
        <CircularMenu v-if="isNotLoading" />
    </div>
</template>
