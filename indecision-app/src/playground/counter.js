class Counter extends React.Component {
	constructor(props) {
		super(props)
		this.handleAddOne = this.handleAddOne.bind(this)
		this.handleMinusOne = this.handleMinusOne.bind(this)
		this.handleReset = this.handleReset.bind(this)
		this.state = {
			count: props.count,
		}
	}

	componentDidMount() {
		const countString = localStorage.getItem("count")
		const count = parseInt(countString, 10)
		if (!isNaN(count)) {
			this.setState(() => ({ count }))
		}
	}

	componentDidUpdate(prevState) {
		if (prevState.count !== this.state.count) {
			const int = this.state.count
			localStorage.setItem("count", int)
		}
	}

	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
			}
		})
	}
	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1,
			}
		})
	}
	handleReset() {
		this.setState(() => {
			return {
				count: 0,
			}
		})
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		)
	}
}

Counter.defaultProps = {
	count: 0,
}

ReactDOM.render(<Counter />, document.getElementById("app"))

// let count = 0
// const addOne = () => {
// 	count++
// 	renderCounterApp()
// 	console.log("click", count)
// }

// const subtractOne = () => {
// 	count--
// 	renderCounterApp()
// 	console.log("-1")
// }

// const reset = (params) => {
// 	count = 0
// 	renderCounterApp()
// 	console.log("reset")
// }

// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={subtractOne}>-1</button>
// 			<button onClick={reset}>Reset</button>
// 		</div>
// 	)
// 	ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()
