"use strict";

// visibility toggle
// hide details
// some details

var appRoot = document.getElementById("app");

var details = React.createElement(
	"p",
	null,
	"Some details."
);
var visibility = true;

var toggleVisibility = function toggleVisibility() {
	visibility = !visibility;

	renderApp();
};

var renderApp = function renderApp() {
	var template = React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			"Visibility Toggle"
		),
		React.createElement(
			"button",
			{ onClick: toggleVisibility },
			visibility ? "Hide" : "Show",
			" details."
		),
		visibility && details
	);

	ReactDOM.render(template, appRoot);
};

renderApp();
