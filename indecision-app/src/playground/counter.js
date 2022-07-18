let count = 0
const addOne = () => {
	count++
	renderCounterApp()
	console.log("click", count)
}

const subtractOne = () => {
	count--
	renderCounterApp()
	console.log("-1")
}

const reset = (params) => {
	count = 0
	renderCounterApp()
	console.log("reset")
}

const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={subtractOne}>-1</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
	ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()
