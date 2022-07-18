console.log("App.js is running")

//JSX - JavaScript XML

const app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer.",
	options: ["One", "Two"],
}

const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? "Here are your options." : "No options"}</p>
	</div>
)

let count = 0
const addOne = () => {
	count++
	renderCounterApp()
	console.log('click', count);
}

const subtractOne = () => {
	count--
	renderCounterApp()
	console.log("-1");
}

const reset = (params) => {
	count = 0
	renderCounterApp()
	console.log('reset');
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

const appRoot = document.getElementById("app")

renderCounterApp()
