import {Provider} from "./types";


export class Store {
    private providers: Provider[] = [];

    constructor(global = false) {
        if (!global) {
            this.providers = [...GlobalStore.providers];
        }
    }


    register(provider: Provider) {
        this.providers.push(provider);
        return provider;
    }

    find(type) {
        return this.providers.filter(p => p.provide == type).pop();
    }
}

export const GlobalStore = new Store(true);