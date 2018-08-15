
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

### Sort list of users by age

```js
const { sort, prop, ascend } = require('./src');

let user1 = {name: "walter", age: 35};
let user2 = {name: "Wally", age: 21};
let user3 = {name: "Pippo", age: 41};
let users = [user1, user2, user3];

const sortByAge = sort(ascend(prop('age')));

sortByAge(users)
[ { name: 'Wally', age: 21 },
  { name: 'walter', age: 35 },
  { name: 'Pippo', age: 41 } ]
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

### Group by age a list of users

```js
const { groupBy, prop } = require('./src');

let user1 = {name: "walter", age: 35};
let user2 = {name: "Wally", age: 35};
let user3 = {name: "Pippo", age: 41};
let user4 = {name: "Paperino", age: 14};
let users = [user1, user2, user3, user4];

const groupByAge = groupBy(prop('age'));

groupByAge(users)
{ '14': [ { name: 'Paperino', age: 14 } ],
  '35': [ { name: 'walter', age: 35 }, { name: 'Wally', age: 35 } ],
  '41': [ { name: 'Pippo', age: 41 } ] }
```

### Group by age a list of users (2)

```js
const { groupBy, path } = require('./src');

let user1 = {name: "walter", profile: {age: 35}};
let user2 = {name: "Wally", profile: {age: 35}};
let user3 = {name: "Pippo", profile: {age: 41}};
let user4 = {name: "Paperino", profile: {age: 14}};
let users = [user1, user2, user3, user4];

const groupByAge = groupBy(path(['profile', 'age']));

groupByAge(users)
{ '14': [ { name: 'Paperino', profile: [Object] } ],
  '35':
   [ { name: 'walter', profile: [Object] },
     { name: 'Wally', profile: [Object] } ],
  '41': [ { name: 'Pippo', profile: [Object] } ] }
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

### Update a deeply nested property of a list of users

```js
const { map, lensPath, inc, over } = require('./src');

let user1 = {name: "walter", profile: {value: 2}};
let user2 = {name: "Wally", profile: {value: 4}};
let user3 = {name: "Pippo", profile: {value: 1}};
let users = [user1, user2, user3];

const xLens = lensPath(['profile', 'value']);
const increaseValue = over(xLens)(inc);

map(increaseValue)(users);
[ { name: 'walter', profile: { value: 3 } },
  { name: 'Wally', profile: { value: 5 } },
  { name: 'Pippo', profile: { value: 2 } } ]
```

### Update a deeply nested property of a list of users (2)

```js
const { map, lensPath, inc, over } = require('./src');

let user1 = {name: "walter", comments: [{name: 'Laura', score: 2}, {name: 'Michele', score: 0}]};
let user2 = {name: "Wally", comments: [{name: 'Michele', score: 0}]};
let user3 = {name: "Pippo", comments: [{name: 'Giovanni', score: 8}, {name: 'Michele', score: 3}]};
let users = [user1, user2, user3];

const xLens = lensPath(['comments', 0, 'score']);
const increaseValue = over(xLens)(inc);

map(increaseValue)(users);
[ { name: 'walter', comments: [{name: 'Laura', score: 3}, {name: 'Michele', score: 0}], [Object] ] },
  { name: 'Wally', comments: [{name: 'Michele', score: 1}] },
  { name: 'Pippo', comments: [{name: 'Giovanni', score: 9}, {name: 'Michele', score: 3}] } ]

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

### Max Min

```js
const {
  T, flip, converge, concat, or, last, head, append, pipe,
  cond, curry2, uncurry2, equals, length, sort, reverse,
  always, slice, identity, subtract, gte
} = require('./src');

const length_is_less_than_1 = pipe([length, gte(1)]);
const first_element = pipe([head, curry2(flip(uncurry2(append)))([])]);
const last_element = pipe([last, curry2(flip(uncurry2(append)))([])]);

const create_min_max_tuple = converge(uncurry2(concat))([first_element, last_element]);

const descending_sort = sort(flip(subtract));

const without_first_and_last_element = slice(1)(-1);

function max_min(rem, fin) {
  return cond([
    [length_is_less_than_1, always(fin)],
    [T, pipe([
      create_min_max_tuple,
      concat(fin),
      curry2(max_min)(without_first_and_last_element(rem))
    ])]
  ])(rem)
}

let numbers = [1,2,3,4,5,6,7,8,9,10]

numbers = descending_sort(numbers)

max_min(numbers, [])
```
