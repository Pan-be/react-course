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

const templateTwo = (
	<div>
		<h1>Count: {count}</h1>
	</div>
)

const appRoot = document.getElementById("app")

ReactDOM.render(templateTwo, appRoot)
