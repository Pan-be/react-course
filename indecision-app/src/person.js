const isAdult = (age) => {
	if (age >= 18) {
		return true
	} else {
		return false
	}
}

const canDrink = (age) => age >= 18

export default (age) => age >= 65

export { isAdult, canDrink }
