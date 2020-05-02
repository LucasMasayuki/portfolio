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
    public initLoading(): void {
        setTimeout(() => {
            this.context.commit('setLoading', false);
        }, 5000);
    }
}
