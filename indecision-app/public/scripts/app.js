"use strict";

console.log("App.js is running");

//JSX - JavaScript XML

var app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer."
};

var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		app.title
	),
	React.createElement(
		"p",
		null,
		app.subtitle
	)
);

var user = {
	name: "Pan-Be",
	age: 33,
	location: "Bielsko-Biała"
};

function getLocation(location) {
	if (location) {
		return React.createElement(
			"p",
			null,
			"Location: ",
			location
		);
	}
}

var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		user.name
	),
	React.createElement(
		"p",
		null,
		"Age: ",
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
