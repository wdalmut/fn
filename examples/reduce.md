# Reduce

## Flatten multiple Min Max

const {
  T, flip, converge, concat, or, last, head, append, pipe,
  cond, curry2, uncurry2, equals, length, sort, reverse,
  always, slice, identity, subtract, map, reduce
} = require('./src');

const first_element = pipe([head, curry2(flip(uncurry2(append)))([])]);
const last_element = pipe([last, curry2(flip(uncurry2(append)))([])]);

function minMax(fin, rem) {
  return cond([
    [converge(uncurry2(or))([pipe([length, equals(0)]), pipe([length, equals(1)])]), always(fin)],
    [T, pipe([
      converge(uncurry2(concat))([first_element, last_element]),
      concat(fin),
      curry2(flip(minMax))(slice(1)(-1)(rem))
    ])]
  ])(rem)
}


let numbers = [
  [1,2,3,4,5,6,7,8,9,10],
  [4,13,5,7,61,2,42,7,9,4,26,12],
]

pipe([map(pipe([sort(subtract), reverse])), reduce(minMax)([])])(numbers)

