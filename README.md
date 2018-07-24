
## Example

### Exec a secondary function example

```js
const { map, tap, inc, pipe } = require('./src');

const log = tap(console.log);

map(pipe([log, inc]))([1,2,3]);
1
2
3
[ 2, 3, 4 ]
```

### Sort list of users by name

```js
const { sortBy, prop, toLower, pipe } = require('./src');

let user1 = {name: "walter"};
let user2 = {name: "Wally"};
let user3 = {name: "Pippo"};
let users = [user1, user2, user3];

const byName = pipe([prop('name'), toLower])
const sortByName = sortBy(byName);

sortByName(users)
[ { name: 'Pippo' }, { name: 'Wally' }, { name: 'walter' } ]
```

### Filter list of users with a given name

```js
let user1 = {name: "walter"};
let user2 = {name: "Wally"};
let user3 = {name: "Pippo"};
let users = [user1, user2, user3];

const { filter, pathEq } = require('./src');

const nameIsWalter = pathEq(['name'])('walter');
const filterByNameEqualsToWalter = filter(nameIsWalter);

filterByNameEqualsToWalter(users)
[ { name: 'walter' } ]
```

### Update a property of a list of users

```js
const { map, lensProp, inc, over } = require('./src');

let user1 = {name: "walter", value: 2};
let user2 = {name: "Wally", value: 4};
let user3 = {name: "Pippo", value: 1};
let users = [user1, user2, user3];

const xLens = lensProp('value');
const increaseValue = over(xLens)(inc);

map(increaseValue)(users);
[ { name: 'walter', value: 3 },
  { name: 'Wally', value: 5 },
  { name: 'Pippo', value: 2 } ]
```

### fizzbuzz

```js
const {T, flip, pipe, cond, equals, always, modulo, identity} = require('./src');


cond([
  [pipe(flip(modulo)(15), equals(0)), always("fizzbuzz")],
  [pipe(flip(modulo)(3), equals(0)), always("fizz")],
  [pipe(flip(modulo)(5), equals(0)), always("buzz")],
  [T, identity],
])
```

