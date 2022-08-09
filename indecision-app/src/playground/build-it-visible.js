// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false
//

class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props)
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
		this.state = {
			visibility: false
		}
	}
	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			}
		})
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>
					{this.state.visibility ? "Hide" : "Show"} details.
				</button>
				{this.state.visibility && (
					<div>
						<p>Some Details.</p>
					</div>
				)}
			</div>
		)
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
// const appRoot = document.getElementById("app")

// let details = <p>Some details.</p>
// let visibility = true

// const toggleVisibility = () => {
// 	visibility = !visibility

// 	renderApp()
// }

// const renderApp = () => {
// 	const template = (
// 		<div>
// 			<h1>Visibility Toggle</h1>
// 			<button onClick={toggleVisibility}>
// 				{visibility ? "Hide" : "Show"} details.
// 			</button>
// 			{visibility && details}
// 		</div>
// 	)

// 	ReactDOM.render(template, appRoot)
// }

// renderApp()
