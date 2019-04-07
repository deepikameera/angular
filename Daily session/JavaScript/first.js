var x = "abc"
undefined
typeof x
"string"
typeof z
"undefined"
var z=[1,52,45]
undefined
typeof z
"object"
var y=12
undefined
typeof y
"number"
const a=1
undefined
a=2
VM137:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:2
(anonymous) @ VM137:1
let b=4
undefined
b="jdkhg"
"jdkhg"
//wrapper function
(function(){
    var x=1;
    return x;
})()
1
!(function(){
    var x=1;
    return x;
})()
false
(function(){
    var x=1;
    return null;
})()
null
!(function(){
    var x=1;
    return null;
})()
true
console.dir
ƒ dir() { [native code] }
var y = "outside var"
undefined
var y = "outside var"
let z = "outside let"
