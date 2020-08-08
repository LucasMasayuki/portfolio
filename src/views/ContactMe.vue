<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HiddenOverflowContainer from '@/components/HiddenOverflowContainer.vue';

@Component({
    name: 'ContactMe',
    components: {
        HiddenOverflowContainer,
    },
})
export default class ContactMe extends Vue {}
</script>

<template>
    <HiddenOverflowContainer pageClass="contact_me"></HiddenOverflowContainer>
</template>

<style lang="scss">
</style>
