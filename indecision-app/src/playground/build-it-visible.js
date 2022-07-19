// visibility toggle
// hide details
// some details

const appRoot = document.getElementById("app")

let details = <p>Some details.</p>
let visibility = true

const toggleVisibility = () => {
	visibility = !visibility

	renderApp()
}

const renderApp = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggleVisibility}>
				{visibility ? "Hide" : "Show"} details.
			</button>
			{visibility && details}
		</div>
	)

	ReactDOM.render(template, appRoot)
}

renderApp()
