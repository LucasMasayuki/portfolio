import {
    VuexModule, Module, Action, Mutation,
} from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class HomeModule extends VuexModule {
    public isLoading = true;

    @Mutation
    public setLoading(loading: boolean) {
        this.isLoading = loading;
    }

    @Action
    public async initLoading(typingTime: number): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, typingTime));
        this.context.commit('setLoading', false);
    }
}
