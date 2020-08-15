import { shallowMount } from '@vue/test-utils';
import RoundedButton from '@/components/RoundedButton.vue';

describe('RoundedButton.vue', () => {
    it('After click on button should emmit event', async () => {
        const text = 'title';

        const wrapper = shallowMount(RoundedButton, {
            propsData: {
                text,
            },
        });

        wrapper.find('button').trigger('click');

        expect(wrapper.emitted('click')).toHaveLength(1);
    });
});
