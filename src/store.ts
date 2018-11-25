import {Provider} from "./decorators";

export class Store {
    private providers: Provider[] = [];

    register(provider: Provider) {
        this.providers.push(provider);
        return provider;
    }

    find(type) {
        return this.providers.filter(p => p.provide == p).pop();
    }
}