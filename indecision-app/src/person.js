const isAdult = (age) => {
	if (age >= 18) {
		return true
	} else {
		return false
	}
}

const canDrink = (age) => age >= 18

export { isAdult, canDrink }
