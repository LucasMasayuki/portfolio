<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Constants from '../shared/Constants';

@Component
export default class TypeWritterTitle extends Vue {
    @Prop({ default: '' }) public title!: string;

    @Prop({ default: Constants.DEFAULT_TYPING_SPEED })
    public typingSpeed!: number;

    @Prop({ default: Constants.DEFAULT_TEXT_DELAY }) public textDelay!: number;

    public currentTypedText = '';

    public currentIndex = 0;

    public mounted() {
        setTimeout(this.typeText, this.textDelay + 200);
    }

    private typeText() {
        const titleCharacteres: string[] = this.title.split('');

        if (this.currentIndex < titleCharacteres.length) {
            this.currentTypedText += titleCharacteres[this.currentIndex];
            this.currentIndex += 1;

            setTimeout(this.typeText, this.typingSpeed);
        }
    }
}
</script>

<template>
    <h1 class="typewriter">
        <span class="typed-text">{{ currentTypedText }}</span>
        <span class="cursor">&nbsp;</span>
    </h1>
</template>

<style lang="scss" scoped>
.typewriter {
    color: #fff;
    font-family: 'Anonymous Pro', monospace;
    width: 100%;
}
span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    height: 0.8em;
    background-color: #fff;
    animation: cursorBlink 1s infinite;
}
@keyframes cursorBlink {
    49% {
        background-color: #fff;
    }
    50% {
        background-color: transparent;
    }
    99% {
        background-color: transparent;
    }
}
</style>
