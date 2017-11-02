// let: Block scoping
// Part 1
let a = 'hello';
console.log('a outside of scope =', a);		// hello
{
	let a = 'Goodbye!';
  	console.log('a inside of scope =', a);	// Goodbye!
}
console.log('a outside of scope =', a); 	// hello

// Part 2
{
	let salary = 30000;
}
console.log('Salary:', salary); // ERROR: salary is not defined

// const: Constant Scoping
// Part 1
const year = 2017;
year = 2015; // ERROR

const arr = [1, 2];
arr = [1]; // ERROR

// Part 2
const arr = [1, 2];
arr.push(3); // VALID