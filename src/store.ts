import {Provider} from "./types";

export class Store {
    private providers: Provider[] = [];

    register(provider: Provider) {
        this.providers.push(provider);
        return provider;
    }

    find(type) {
        return this.providers.filter(p => p.provide == type).pop();
    }
}