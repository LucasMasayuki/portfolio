<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ProfileLogo extends Vue {}
</script>

<template>
    <div class="profile-logo">
        <img class="profile-img" src="../assets/imgs/profile.jpg" />
    </div>
</template>

<style lang="scss" scoped>
.profile-logo {
    cursor: pointer;
    text-align: center;
}
h2,
p {
    margin: 0;
}
.profile-img {
    background: transparent;
    opacity: 1;
    border-radius: 100px;
}
</style>
