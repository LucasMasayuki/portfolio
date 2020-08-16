<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HiddenOverflowContainer from '@/components/HiddenOverflowContainer.vue';
import Home from '@/components/Home.vue';
import CircularMenu from '@/components/CircularMenu.vue';
import Constants from '@/shared/Constants';

@Component({
    name: 'Main',
    components: {
        Home,
        HiddenOverflowContainer,
        CircularMenu,
    },
})
export default class Main extends Vue {
    get isNotLoading(): boolean {
        return !this.$store.state.home.isLoading;
    }

    get isHomeScreen(): boolean {
        return this.$store.state.main.screen === Constants.SCREEN.home;
    }
}
</script>

<template>
    <div>
        <transition name="fade">
            <Home v-if="isHomeScreen" />
        </transition>
        <CircularMenu v-if="isNotLoading" />
    </div>
</template>
