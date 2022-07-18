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

var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Count: ",
		count
	)
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
