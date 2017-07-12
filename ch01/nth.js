var _ = require("underscore");

var letters = ['a', 'b', 'c'];
console.log(letters[1]);

function naiveNth(a, index) {
  return a[index];
}

console.log(naiveNth(letters, 1));
console.log(naiveNth({}, 1)); // --> undefined. 어떤 결과가 발생할지 졍의되어 있지 않음.

function fail(thing) {
  throw new Error(thing);
}

/**
 * 데이터가 문자열인지 배열인지 검사하는 기능을 추상화한 함수
 * @param {*} data 
 */
function isIndexed(data) {
  return _.isArray(data) || _.isString(data);
}

/**
 * nth는 '인덱스된 데이터 형식'에서 유효한 인덱스에 위치한 요소를 반환한다.
 * @param {*} a 
 * @param {*} index 
 */
function nth(a, index) {
  if(!_.isNumber(index)) fail("Expected a number as the index");
  if (!isIndexed(a)) fail("Not supported on non-indexed type");
  if ((index < 0) || (index > a.length -1))
    fail("Index value is out of bounds");

  return a[index];
}

console.log(nth(letters, 1));
console.log(nth(letters, 0));
// console.log(nth({}, 2));
// console.log(nth(letters, 300));
// console.log(nth(letters, 'test'));


/**
 * nth를 사용하여 두번째 값을 반환하는 함수
 * @param {*} a 
 */
function second(a) {
  return nth(a, 1);
}
console.log(second(['1', '2', '3']));
console.log(second("draconian"));