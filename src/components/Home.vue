<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfileLogo from '@/components/ProfileLogo.vue';
import RoundedButton from '@/components/RoundedButton.vue';
import TypeWritterTitle from '@/components/TypeWritterTitle.vue';
import HiddenOverflowContainer from '@/components/HiddenOverflowContainer.vue';
import Constants from '@/shared/Constants';

@Component({
    name: 'Home',
    components: {
        ProfileLogo,
        RoundedButton,
        TypeWritterTitle,
        HiddenOverflowContainer,
    },
})
export default class Home extends Vue {
    get screen(): string {
        return this.$store.state.main.screen;
    }

    get isLoading(): boolean {
        return this.$store.state.home.isLoading;
    }

    public mounted() {
        this.$store.dispatch('home/initLoading', Constants.TYPING_TIME);
    }
}
</script>

<template>
    <HiddenOverflowContainer :screen="screen">
        <div class="home-container">
            <transition name="fade" mode="out-in">
                <div v-if="isLoading">
                    <TypeWritterTitle
                        title="Nothing is impossible having an idea, a computer and a cup of coffee"
                        typingSpeed="100"
                    />
                </div>
                <div v-if="!isLoading">
                    <ProfileLogo />
                    <h1>Hi, I'm Lucas,</h1>
                    <h2>a full stack developer, and freelancer software engineer.</h2>
                </div>
            </transition>
        </div>
    </HiddenOverflowContainer>
</template>

<style lang="scss" scoped>
.home-container {
    margin: 0 10%;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1.6);
}
h1 {
    font-size: 30px;
}
h2 {
    font-size: 20px;
}
.h3 {
    font-size: x-large;
    text-transform: uppercase;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
