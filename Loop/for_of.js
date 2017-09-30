//for in是ES5标准,for of是ES6标准;for in是遍历对象属性,for of是遍历对象元素。

Object.prototype.objCustom = function () { };
Array.prototype.arrCustom = function () { };

let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let i in iterable) {
    console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i of iterable) {
    console.log(i); // logs 3, 5, 7
}