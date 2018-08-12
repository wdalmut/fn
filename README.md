
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

### Average example

```js
const { length, sum, divide, converge } = require('./src');

converge(divide)([sum, length])([1,2,3]); // 2
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
const {T, flip, pipe, cond, curry2, equals, always, modulo, identity} = require('./src');


cond([
  [pipe([curry2(flip(modulo))(15), equals(0)]), always("fizzbuzz")],
  [pipe([curry2(flip(modulo))(3), equals(0)]), always("fizz")],
  [pipe([curry2(flip(modulo))(5), equals(0)]), always("buzz")],
  [T, identity],
])(3)
```

### Min Max

```js
const {T, flip, converge, concat, or, last, head, append, pipe, cond, curry2, uncurry2, equals, length, sort, reverse, always, slice, identity, subtract} = require('./src');

let numbers = [1,2,3,4,5,6,7,8,9,10]

numbers = pipe([sort(subtract), reverse])(numbers)

const first_element = pipe(head, curry2(flip(uncurry2(append)))([]));
const last_element = pipe(last, curry2(flip(uncurry2(append)))([]));

function minMax(rem, fin) {
  return cond([
    [converge(uncurry2(or))([pipe([length, equals(0)]), pipe([length, equals(1)])]), always(fin)],
    [T, pipe([
      converge(uncurry2(concat))([first_element, last_element]),
      concat(fin),
      curry2(minMax)(slice(1)(-1)(rem))
    ])]
  ])(rem)
}

minMax(numbers, [])
```
