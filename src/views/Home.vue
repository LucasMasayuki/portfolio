<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Welcome from '@/components/Welcome.vue';

@Component({
    name: 'Home',
    components: {
        Welcome,
    },
})
export default class Home extends Vue {}
</script>

<template>
    <Welcome />
</template>

<style lang="scss" scoped>
</style>
