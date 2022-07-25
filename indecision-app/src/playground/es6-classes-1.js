class Person {
	constructor(imie = "no named", age = 0) {
		this.name = imie
		this.age = age
	}
	getGreatings() {
		return `Hi! My name is ${this.name} and I am ${this.age} year(s) old.`
	}
}

const me = new Person("Konrad", 33)
console.log(me.getGreatings())

const other = new Person()
console.log(other.getGreatings())
