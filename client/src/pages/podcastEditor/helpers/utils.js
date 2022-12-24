function parseComplexStyleProperty(str) {
  var regex = /(\w+)\((.+?)\)/g,
    transform = {},
    match;

  while ((match = regex.exec(str)))
    transform[match[1]] = transform[match[1]]
      ? transform[match[1]].concat([match[2]])
      : [match[2]];

  return transform;
}

export { parseComplexStyleProperty };
