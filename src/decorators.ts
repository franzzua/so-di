
export function Injectable({deps, multiple}: {deps?: any[], multiple?} = {deps: [], multiple: false}) {
    return target => {
        // register({
        //     provide: target,
        //     useClass: target,
        //     deps: deps,
        //     multiple: multiple
        // });
        return target;
    };
}

export function Inject() {
    return (target, propery, index) => {

    };
}

