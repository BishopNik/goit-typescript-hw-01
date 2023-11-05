/** @format */

let total: number = 100;
let lastName: string = 'Bob';
let isActive: boolean = false;
let empty: null = null;
let undf: undefined = undefined;

// string;
// number | string;

type User1 = {};

const numbers: string[] = ['moon', 'sun'];

type eventType = 'lesson' | 'deadline';

const event: eventType = 'homework';

let age: any = 10;
age = 'Bob';
age = false;

let name1: unknown = 12;
name1 = 'Bob';
name1.toFixed();

enum Sizes {
	small = 'small',
	medium = 'medium',
	large = 'large',
}

const button2: Sizes = Sizes.large;

function add(num1: number, num2: number): void {
	console.log(num1 + num2);
}

type Car = {
	color: string;
	price: number;
	currency: string;
	start: (color: string) => {};
};

const Car = {
	color: 'red',
	price: 1000,
	currency: 'UAH',
	start(color: string) {
		console.log('Start' + this.color + color);
	},
};

type User = {
	name: string;
	age: number;
	role?: string;
};

const user: User = {
	name: 'bob',
	age: 12,
};
