class Person {
	constructor(imie = "no named", age = 0) {
		this.name = imie
		this.age = age
	}
	getGreeting() {
		return `Hi! My name is ${this.name} and I am ${this.age} year(s) old.`
	}
}

// class Student extends Person {
// 	constructor(name, age, major) {
// 		super(name, age)
// 		this.major = major
// 	}
// 	hasMajor() {
// 		return !!this.major
// 	}
// 	getGreeting() {
// 		let description = super.getGreeting()

// 		if (this.hasMajor()) {
// 			description += `My major is ${this.major}`
// 		}

// 		return description
// 	}
// }

// const me = new Student("Stasiu", 33, 'Web dev')
// console.log(me.hasMajor())
// console.log(me.getGreeting())

// const other = new Student()
// console.log(other.hasMajor())
// console.log(other.getGreeting())

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age)
		this.homeLocation = homeLocation
	}
	hasHomeLocation() {
		return this.homeLocation
	}
	getGreeting() {
		let greatings = super.getGreeting()
		if (this.hasHomeLocation()) {
			greatings += ` I'm visiting from ${this.homeLocation}.`
		}
		return greatings
	}
}

const me = new Traveler('Konrad', 33, 'Bielsko-Biała')
console.log(me.getGreeting());

const other = new Traveler()
console.log(other.getGreeting());