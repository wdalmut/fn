
module.exports = {
  filter:        require('./filter'),
  not:           require('./not'),
  complement:    require('./not'),
  eq:            require('./eq'),
  equals:        require('./eq'),
  or:            require('./or'),
  lt:            require('./lt'),
  lte:           require('./lte'),
  gt:            require('./gt'),
  gte:           require('./gte'),
  prop:          require('./prop'),
  pipe:          require('./pipe'),
  compose:       require('./compose'),
  at:            require('./at'),
  nth:           require('./at'),
  take:          require('./at'),
  insert:        require('./insert'),
  remove:        require('./remove'),
  map:           require('./map'),
  reduce:        require('./reduce'),
  assoc:         require('./assoc'),
  path:          require('./path'),
  pathEq:        require('./path-eq'),
  pathSatisfies: require('./path-satisfies'),
  sort:          require('./sort'),
  sortBy:        require('./sort-by'),
  toLower:       require('./to-lower'),
  sum:           require('./sum'),
  inc:           require('./inc'),
  subtract:      require('./subtract'),
  curry2:        require('./curry2'),
  curry3:        require('./curry3'),
  curry4:        require('./curry4'),
  curry5:        require('./curry5'),
  lens:          require('./lens'),
  lensProp:      require('./lens-prop'),
  lensIndex:     require('./lens-index'),
  view:          require('./view'),
  set:           require('./set'),
  over:          require('./over'),
  tap:           require('./tap'),
  unary:         require('./unary'),
  T:             require('./t'),
  F:             require('./f'),
  cond:          require('./cond'),
  ifElse:        require('./if-else'),
  apply:         require('./apply'),
  flip:          require('./flip'),
  identity:      require('./identity'),
  always:        require('./always'),
  tail:          require('./tail'),
  modulo:        require('./modulo'),
  converge:      require('./converge'),
  divide:        require('./divide'),
  length:        require('./length'),
  slice:         require('./slice'),
  reverse:       require('./reverse'),
  append:        require('./append'),
  last:          require('./last'),
  head:          require('./head'),
  uncurry2:      require('./uncurry2'),
  concat:        require('./concat'),
  aperture:      require('./aperture'),
  range:         require('./range'),
  ascend:        require('./ascend'),
  descend:       require('./descend'),
  isNil:         require('./is-nil'),
  groupBy:       require('./group-by'),
  assocPath:     require('./assoc-path'),
  lensPath:      require('./lens-path'),
};
