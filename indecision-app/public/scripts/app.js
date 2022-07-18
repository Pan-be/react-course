"use strict";

console.log("App.js is running");

//JSX - JavaScript XML

var app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer.",
	options: ["One", "Two"]
};

var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		app.title
	),
	app.subtitle && React.createElement(
		"p",
		null,
		app.subtitle
	),
	React.createElement(
		"p",
		null,
		app.options.length > 0 ? "Here are your options." : "No options"
	)
);

var count = 0;
var addOne = function addOne() {
	count++;
	renderCounterApp();
	console.log('click', count);
};

var subtractOne = function subtractOne() {
	count--;
	renderCounterApp();
	console.log("-1");
};

var reset = function reset(params) {
	count = 0;
	renderCounterApp();
	console.log('reset');
};

var renderCounterApp = function renderCounterApp() {
	var templateTwo = React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			"Count: ",
			count
		),
		React.createElement(
			"button",
			{ onClick: addOne },
			"+1"
		),
		React.createElement(
			"button",
			{ onClick: subtractOne },
			"-1"
		),
		React.createElement(
			"button",
			{ onClick: reset },
			"Reset"
		)
	);
	ReactDOM.render(templateTwo, appRoot);
};

var appRoot = document.getElementById("app");

renderCounterApp();
