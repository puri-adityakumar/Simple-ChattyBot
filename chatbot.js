// Import the sync-input package to read user input synchronously
const input = require('sync-input');

// Function to greet the user
function greet(bot_name, birth_year) {
	console.log("Hello! My name is " + bot_name + ".");
	console.log("I was created in " + birth_year + ".");
}

// Function to ask the user for their name and greet them
function remind_name() {
	console.log("Please, remind me your name.");
	let name = input();
	console.log("What a great name you have, " + name + "!");
}

// Function to guess the user's age based on remainders of dividing by 3, 5 and 7
function guess_age() {
	console.log("Let me guess your age.");
	console.log("Enter remainders of dividing your age by 3, 5 and 7.");

	let rem3 = Number(input());
	let rem5 = Number(input());
	let rem7 = Number(input());

	let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

	console.log("Your age is " + age + "; that's a good time to start programming!");
}

// Function to count from 0 to a number entered by the user
function count() {
	console.log("Now I will prove to you that I can count to any number you want.");

	let number = Number(input());
	let current = 0;

	while (current <= number) {
		console.log(current + " !");
		current += 1;
	}
}

// Function to test the user's knowledge of programming
function test() {
	console.log("Let's test your programming knowledge.");
	console.log("Why do we use methods?");
	console.log("1. To repeat a statement multiple times.");
	console.log("2. To decompose a program into several small subroutines.");
	console.log("3. To determine the execution time of a program.");
	console.log("4. To interrupt the execution of a program.");

	while (true) {
		let answer = input();
		if (answer === "2") {
			console.log("Congratulations, have a nice day!");
			break;
		} else {
			console.log("Please, try again.");
		}
	}
}

// Function to end the program
function end() {
	console.log("Completed, have a nice day!");
}

// Call the above functions in the proper order to run the program
greet('Aid', '2020');
remind_name();
guess_age();
count();
test();
end();
