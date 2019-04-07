/*Scoping + var vs let vs const*/
1.
(function(){

	function scoping(argument) {
		var x = "abc";
		let y = "xyz";
		const z = "const";
		console.log("Inside scoping function x = "+x);
		console.log("Inside scoping function y = "+y);
		console.log("Inside scoping function z = "+z);
	}
	scoping();
	console.log("outside scoping function x = "+x);
	console.log("outside scoping function z = "+z);
	console.log("outside scoping function y = "+y);
	
})();

2.
var x = "abc";
let y = 123;
console.log("x = "+x,"y = "+y);
console.log("x = "+window.x,"y = "+window.y);

3.
function scoping(){
	console.log(x, y);
	var x = 5;
	let y = 6;
	console.log(x, y);
}

4. 
let x = [1,2,3,4];
let x = new Array(1,2,3);

/*declaration & definations of variables */

var x = "acas";
var y = "123";
var z = 123;
/*=====================*/
var x,y,z;
x = "acas";
y = "123";
z = 123;

/* Arrays */
var x = [];
var y = new Array();

console.log(x instanceof Array); // true
console.log(y instanceof Array); // true

console.log(Array.isArray(x)); // true
console.log(Array.isArray(y)); // true













