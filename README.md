# so-di
tiny dependency injection library

it's need to declare dependencies:

` Container.provide([
  {provide: IDependency, useClass: Dependency, deps: [depA, depB]}
]);`

instead of useClass you can use useValue.

you can provide multiple = true, so for every resolving container will create new instance.

if no useClass or useValue provided, it will be eq to useClass = provide.

if no deps provided, deps = [].
