console.log("App.js is running")

//JSX - JavaScript XML

const app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer.",
	options: [],
}

const onFormSubmit = (e) => {
	e.preventDefault()
	const option = e.target.elements.option.value

	if (option) {
		app.options.push(option)
		e.target.elements.option.value = ""
		renderApp()
	}

	console.log(app.options)
}

const renderApp = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? "Here are your options." : "No options"}</p>
			<p>{app.options.length}</p>
			<ol>
				<li>Options one</li>
				<li>Options two</li>
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type='text' name='option'></input>
				<button>Add option</button>
			</form>
		</div>
	)
	ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById("app")
renderApp()
