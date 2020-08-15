import { shallowMount } from '@vue/test-utils';
import TypeWritterTitle from '@/components/TypeWritterTitle.vue';
import Constants from '@/shared/Constants';

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('TypeWritterTitle.vue', () => {
    it('After time, should have write the title', async () => {
        const title = 'title';
        const time = 1;
        const wrapper = shallowMount(TypeWritterTitle, {
            propsData: {
                title,
                typingSpeed: 1,
                textDelay: 1,
            },
        });

        await wrapper.vm.$nextTick();

        await sleep(time * Constants.DEFAULT_TYPING_SPEED * title.length);

        expect(wrapper.vm.$data.currentTypedText).toEqual(title);
    });
});
