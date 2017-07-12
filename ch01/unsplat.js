var _ = require('underscore');

function unsplat(fun) {
  return function() {
    return fun.call(null, _.toArray(arguments));
  };
}

var joinElements = unsplat(function(array) { return array.join(' ') });

console.log(joinElements(1, 2));
console.log(joinElements('-', '$', '/', '!', ':'));

/**
 * ReferenceError: _ is not defined
    at /Users/draconian/Development/JavaScript/functional_javascript/unsplat.js:3:27
    at Object.<anonymous> (/Users/draconian/Development/JavaScript/functional_javascript/unsplat.js:9:13)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:423:7)
    at startup (bootstrap_node.js:147:9)
 */