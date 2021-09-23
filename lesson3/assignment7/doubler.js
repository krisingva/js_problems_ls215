function doubler(arr) {

}

// Test cases:

let array = [1, 2, 3];
console.log(doubler(array));
// [2, 4, 6]
console.log(array);
// [1, 2, 3]
array = ['a', 'b', 3];
console.log(doubler(array));
// ['aa', 'bb', 6]
console.log(array);
// ['a', 'b', 3]
array = [ [1, 2, 3], {a: 1, b: 2}, null, undefined, true, 3 ];
console.log(doubler(array));
// [ [1, 2, 3], [1, 2, 3], {a: 1, b: 2}, {a: 1, b: 2}, null, null, undefined, undefined, true, true, 6 ]
console.log(array);
// [ [1, 2, 3], {a: 1, b: 2}, NaN, null, undefined, true, 3 ]
array = [ NaN, Math.PI, Infinity, -Infinity, 3 ];
console.log(doubler(array));
// [ NaN, Math.PI, Infinity, -Infinity, 6 ]
console.log(array);
// [ NaN, Math.PI, Infinity, -Infinity, 3 ]
array = [ '', 3 ];
console.log(doubler(array));
// [ '', 6 ]
console.log(array);
// [ '', 3 ]
newArr = [1, 2, 3];
array = [ newArr ];
console.log(doubler(array));
// [ [1, 2, 3], [1, 2, 3] ]
console.log(array);
// [ [1, 2, 3] ]
console.log(newArr);
// [1, 2, 3]
newArr.pop;
console.log(doubler(array));
// [ [1, 2], [1, 2] ]
console.log(array);
// [ [1, 2] ]
console.log(newArr);
// [1, 2]
array = [ 3, 3 ];
console.log(doubler(array));
// [ 6, 6 ]
console.log(array);
// [ 3, 3 ]
array = [ 3, , 3 ];
console.log(doubler(array));
// [ 6, 6 ]
console.log(array);
// [ 3, 3 ]
array = [ 3, [1, , 5], 3 ];
console.log(doubler(array));
// [ 6, [1, , 5], [1, , 5], 6 ]
console.log(array);
// [ 3, [1, , 5], 3 ]
array = [ 3, foo: 'bar' ];
console.log(doubler(array));
// [ 6, foo: 'bar' ]
console.log(array);
// [ 3, foo: 'bar' ]
array = [ 2, [ 3, foo: 'bar' ] ];
console.log(doubler(array));
// [ 4, [ 3, foo: 'bar' ], [ 3, foo: 'bar' ] ]
console.log(array);
// [ 3, foo: 'bar' ]
array = [ ];
console.log(doubler(array));
// [ ]
console.log(array);
// [ ]
array = [ 1, 2, 3 ];
console.log(doubler(array, [ 4, 5, 6 ]));
// [ 2, 4, 6 ]
console.log(array);
// [ 1, 2, 3 ]
array = 'abcd';
console.log(doubler(array));
// [ 'aa', 'bb', 'cc', 'dd' ]
console.log(array);
// 'abcd'
array = 531;
console.log(doubler(array));
// [ 10, 6, 2 ]
console.log(array);
// 531
array = { a: 1, b: 2, c: 3 };
console.log(doubler(array));
// [ 2, 4, 6 ]
console.log(array);
// { a: 1, b: 2, c: 3 }
array = undefined;
console.log(doubler(array));
// Invalid input
console.log(array);
// undefined
array = null;
console.log(doubler(array));
// Invalid input
console.log(array);
// null
array = false;
console.log(doubler(array));
// Invalid input
console.log(array);
// false
array = NaN;
console.log(doubler(array));
// Invalid input
console.log(array);
// NaN