var square = x => x * x;

console.log(square(9));

var user = {
	name: 'Kiki',
	sayHi: () => {
		console.log(arguments); // This will return global arguments
		console.log(`Hi. I'm ${this.name}`);
	},
	sayHiAlt () {
		console.log(arguments); // This will return arguments bound to this
		console.log(`Hi. I'm ${this.name}`);
	} 
};


// Arrow functions do not bind the this keyword
user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);