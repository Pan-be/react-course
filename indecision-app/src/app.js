console.log('App.js is running');

//JSX - JavaScript XML
var template = (
    <div>
        <h1>Hello Bieniu</h1>
        <p>Paragraph</p>
    </div>
)

var templateTwo = (
    <div>
        <h1>Konrad</h1>
        <p>Age: 33</p>
        <p>Location: B-B</p>
    </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)