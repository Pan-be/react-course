"use strict";

console.log("App.js is running");

//JSX - JavaScript XML

var app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer.",
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();
	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = "";
		renderApp();
	}

	console.log(app.options);
};

var renderApp = function renderApp() {
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
		),
		React.createElement(
			"p",
			null,
			app.options.length
		),
		React.createElement(
			"ol",
			null,
			React.createElement(
				"li",
				null,
				"Options one"
			),
			React.createElement(
				"li",
				null,
				"Options two"
			)
		),
		React.createElement(
			"form",
			{ onSubmit: onFormSubmit },
			React.createElement("input", { type: "text", name: "option" }),
			React.createElement(
				"button",
				null,
				"Add option"
			)
		)
	);
	ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");
renderApp();
