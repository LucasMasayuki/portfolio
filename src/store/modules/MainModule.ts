import {
    VuexModule, Module, Action, Mutation,
} from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class MainModule extends VuexModule {
    public screen = 'home';

    @Mutation
    public setScreen(screen: string) {
        this.screen = screen;
    }

    @Action
    public onChangeScreen(screen: string): void {
        this.context.commit('setScreen', screen);
    }
}
