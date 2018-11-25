import {ClassProvider, FactoryProvider, Provider, ValueProvider} from "./types";
import {Store} from "./store";

export type CommonProvider = ValueProvider & ClassProvider & FactoryProvider;


export class Container {
    constructor() {
        this.store.register({provide: Container, useValue: this});
    }


    private store = new Store();

    public get<T>(target): T {
        let existing = this.store.find(target);
        if (!existing) {
            throw new Error(`unknown dependency, ${target.name}`);
            // console.warn('should register', target);
            existing = this.store.register({provide: target, useClass: target, deps: []});
        }
        return this.resolve(existing as CommonProvider);
    }

    public provide(providers: Provider[]) {
        providers.forEach(p => this.store.register(p));
    }

    private resolve(provider: CommonProvider) {
        if (provider.useValue)
            return provider.useValue;
        if (!provider.useClass) {
            provider.useClass = provider.provide;
        }
        if (provider.useClass) {
            if (!provider.deps) {
// console.warn('no deps in provider', provider.provide, provider.useClass);
                provider.deps = [];
            }
            const deps = provider.deps.map(dep => this.get(dep));
            const instance = new provider.useClass(...deps);
            if (!provider.multiple) {
                provider.useValue = instance;
            }
            return instance;
        }
        throw new Error('need useClass or useValue')
    }
}