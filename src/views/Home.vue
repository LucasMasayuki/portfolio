<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfileLogo from '@/components/ProfileLogo.vue';
import RoundedButton from '@/components/RoundedButton.vue';
import TypeWritterTitle from '@/components/TypeWritterTitle.vue';

@Component({
    name: 'Home',
    components: {
        ProfileLogo,
        RoundedButton,
        TypeWritterTitle,
    },
})
export default class Home extends Vue {
    get isLoading(): boolean {
        return this.$store.state.home.isLoading;
    }

    public initLoading() {
        this.$store.dispatch('home/initLoading');
    }

    public onClickGoToContactMe() {
        this.$router.push('/contact-me');
    }
}
</script>

<template>
    <div class="main-container">
        <transition name="fade" v-on:before-enter="initLoading" appear>
            <div v-if="isLoading">
                <TypeWritterTitle
                    title="Nothing is impossible having an idea, a computer and a cup of coffee"
                    typingSpeed="100"
                />
            </div>
            <div v-else>
                <ProfileLogo />
                <h1>Hi, I'm Lucas,</h1>
                <h2>a full stack developer, and freelancer software engineer.</h2>
                <div class="grid-button-group">
                    <RoundedButton text="Contact me" @click="onClickGoToContactMe" />
                    <RoundedButton text="See my skils" />
                    <RoundedButton text="See my profile" />
                </div>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.main-container {
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    height: 100%;
    margin: 0 10%;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1.6);
    display: flex;
    justify-content: center;
    align-items: center;
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
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.grid-button-group {
    display: grid;
    grid-gap: 1%;
    grid-template-columns: auto auto auto;
    width: 100%;
}
</style>
