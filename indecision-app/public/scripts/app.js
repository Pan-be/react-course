'use strict';

console.log('App.js is running');

//JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello Bieniu'
    ),
    React.createElement(
        'p',
        null,
        'Paragraph'
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Konrad'
    ),
    React.createElement(
        'p',
        null,
        'Age: 33'
    ),
    React.createElement(
        'p',
        null,
        'Location: B-B'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
