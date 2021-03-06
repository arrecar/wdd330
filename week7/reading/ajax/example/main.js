//This assigns each of the buttons in the HTML file to a variable, so we can refer to them later in the file.
const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

//assign some URLs to variables from where the data will be retrieved
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

//assign an event handler to each button. Let's start with the Number Fact button:
textButton.addEventListener('click', () => {
    fetch(textURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then( text => outputDiv.innerText = text )
    .catch( error => console.log('There was an error:', error))
},false);

//Chuck Norris Fact button:
apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = data.value )
    .catch( error => console.log('There was an error:', error))
},false);