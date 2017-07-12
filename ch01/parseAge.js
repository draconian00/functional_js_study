var _ = require('underscore');

// function parseAge(age) {
//   if (!_.isString(age)) throw new Error("Expecting a string");
//   var a;

//   console.log("Attempting to parse an age");

//   a = parseInt(age, 10);

//   if (_.isNaN(a)) {
//     console.log(["Could not parse age:", age].join(' '));
//     a = 0;
//   }

//   return a;
// }

function fail(thing) {
  throw new Error(thing);
}

function warn(thing) {
  console.log("WARNING:", thing);
  // alert("That doesn't look like a valide age");
}

function note(thing) {
  console.log("NOTE:", thing);
}

function parseAge(age) {
  if (!_.isString(age)) fail("Expectiong a string");
  var a;

  note("Attempting to parse an age");
  a = parseInt(age, 10);

  if (_.isNaN(a)) {
    warn(["Could not parse age:", age].join(' '));
    a = 0;
  }

  return a;
}

parseAge("42");
// parseAge(42);
console.log(parseAge("test"));